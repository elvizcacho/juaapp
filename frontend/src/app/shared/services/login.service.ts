import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LogInService {

    constructor(private http: HttpClient) {}

    public logIn(email: string, password: string): Observable<any> {
        return this.http.post('http://localhost:4000/login', { email, password })
    }
}
