import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ProjectsComponent} from '../projects.component';

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

  constructor(
    public dialogRef: MatDialogRef<ProjectsComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
