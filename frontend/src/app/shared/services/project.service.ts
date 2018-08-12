import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorage } from 'ngx-webstorage';
import { Project } from '../interfaces';

@Injectable()
export class ProjectService {

    public redirectUrl: string;

    private USER_PROJECTS_URL = '/api/user/projects'

    constructor(private http: HttpClient) {}

    public getProjects(): Observable<Project[]> {
        return this.http.get(this.USER_PROJECTS_URL) as Observable<Project[]>;
    }

}
