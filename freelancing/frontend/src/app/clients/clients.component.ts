import { Component } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { Client } from './interfaces';
import {CreateClientModalComponent} from "./modals/createClient.modal.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'j-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  public clients: Client[];

  constructor(private clientService: ClientService, public dialog: MatDialog) {
    clientService
      .getClients()
      .subscribe((data: Client[]) => this.clients = data);
  }

  public onDelete(clientId: number): void {
    this.clientService.deleteClient(clientId).subscribe(data =>this.loadClients());
  }

  public openCreateClient(): void {
    const dialogRef = this.dialog.open(CreateClientModalComponent, {
      width: '500px',
      data: {name: 'Juan', animal: 'Panter'}
    });

    dialogRef.afterClosed().subscribe(data => this.onDialogClosed(data));
  }

  private loadClients(): void {
    this.clientService
      .getClients()
      .subscribe((clients: Client[]) => this.clients = clients);
  }

  private onDialogClosed(result): void {
    this.loadClients();
  }

}
