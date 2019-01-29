import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LogInService } from '../services/login.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private logInService: LogInService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (this.logInService.jwtToken) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          'x-juaapp-jwt': this.logInService.jwtToken
        })
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
