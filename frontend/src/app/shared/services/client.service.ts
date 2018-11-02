import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorage } from 'ngx-webstorage';
import { Client } from '../../clients/interfaces';

@Injectable()
export class ClientService {

  public redirectUrl: string;

  private USER_CLIENTS_URL = '/api/clients'

  constructor(private http: HttpClient) {}

  public getClients(): Observable<Client[]> {
    console.log('ASDSDASDA ');
    return this.http.get(this.USER_CLIENTS_URL) as Observable<Client[]>;
  }

}
