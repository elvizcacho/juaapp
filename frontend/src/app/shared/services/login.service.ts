import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorage } from 'ngx-webstorage';

@Injectable()
export class LogInService {

    private LOGIN_URL = '/api/login'

    @LocalStorage()
    public jwtToken;

    @LocalStorage()
    public user;

    constructor(private http: HttpClient) {}

    public logIn(email: string, password: string): Observable<any> {
        return this.http
          .post(this.LOGIN_URL, { email, password }, { observe: 'response'} )
          .pipe(map((res: HttpResponse<any>) => {
              this.jwtToken = res.headers.get('x-juaapp-jwt'); // TODO: replace by env variable
              this.user = res.body;
              return res.body;
          }));

    }
}
