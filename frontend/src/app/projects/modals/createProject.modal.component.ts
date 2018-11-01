import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ProjectsComponent} from '../projects.component';
import { Project } from '../interfaces';

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
    address: string;
    contactEmail: string;
    createdAt: Date;
    description: string;
    endDate: Date;
    hourlyRate: string;
    id: number;
    name: string;
    paymentMonthDay: string;
    startDate: Date;
    updatedAt: Date;
  };

  constructor(
    public dialogRef: MatDialogRef<ProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  create(project: Project): void {

  }

}
