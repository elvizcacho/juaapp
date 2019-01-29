import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ProjectsComponent} from '../projects.component';
import { Project } from '../interfaces';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {Client} from "../../clients/interfaces";
import {ClientService} from "../../shared/services/client.service";
import {ProjectService} from "../../shared/services";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'j-create-project-modal',
  templateUrl: './createProject.modal.component.html',
  styleUrls: ['./createProject.modal.component.scss']
})
export class CreateProjectModal {

  public project: Project = new class implements Project {
    ClientId: number;
    city: string;
    contactEmail: string;
    description: string;
    endDate: Date;
    hourlyRate: string;
    houseNumber: string;
    id: number;
    name: string;
    paymentMonthDay: number;
    postalCode: string;
    startDate: Date;
    street: string;
  }

  public clientsControl = new FormControl();
  public clients: Observable<Client[]>;

  constructor(
    public dialogRef: MatDialogRef<ProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clientService: ClientService,
    private projectService: ProjectService
  ) {
    this.clients = clientService.getClients();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(project: Project): void {
    this.projectService.createProject(project).subscribe((project: Project) => this.dialogRef.close());
  }

}
