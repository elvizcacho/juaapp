import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../clients/interfaces';

@Injectable()
export class ClientService {

  public redirectUrl: string;

  private USER_CLIENTS_URL = '/api/clients';

  constructor(private http: HttpClient) {}

  public getClients(): Observable<Client[]> {
    return <Observable<Client[]>>this.http.get(this.USER_CLIENTS_URL);
  }

  public createClient(client: Client): Observable<Client> {
    return this.http.post(this.USER_CLIENTS_URL, client) as Observable<Client>;
  }

  public deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.USER_CLIENTS_URL}/${clientId}`);
  }
}
