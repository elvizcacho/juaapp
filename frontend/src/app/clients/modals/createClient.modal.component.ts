import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ClientsComponent} from '../clients.component';
import { Client } from '../interfaces';
import {ClientService} from "../../shared/services/client.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'j-create-client-modal',
  templateUrl: './createClient.modal.component.html',
  styleUrls: ['./createClient.modal.component.scss']
})
export class CreateClientModalComponent {

  public client: Client = new class implements Client {
    city: string;
    createdAt: Date;
    email: string;
    houseNumber: string;
    id: string;
    name: string;
    postalCode: string;
    street: string;
    updatedAt: Date;
  }

  constructor(
    public dialogRef: MatDialogRef<ClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clientService: ClientService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(client: Client): void {
    this.clientService.createClient(client).subscribe((client:Client) => this.dialogRef.close(client));
  }

}
