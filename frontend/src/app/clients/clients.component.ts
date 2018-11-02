import { Component } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { Client } from './interfaces';

@Component({
  selector: 'j-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  public clients: Client[];

  constructor(private clientService: ClientService) {
    clientService
      .getClients()
      .subscribe((data: Client[]) => this.clients = data);
  }

}
