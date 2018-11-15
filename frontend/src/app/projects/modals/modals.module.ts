import { NgModule } from '@angular/core';
import { CreateProjectModal } from './createProject.modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app.material.module';

export const MODALS_COMPONENTS = [
  CreateProjectModal
];

export const MODALS_MODULES = [
  CommonModule,
  FormsModule,
  AppMaterialModule
];

@NgModule({
  declarations: [...MODALS_COMPONENTS],
  entryComponents: [...MODALS_COMPONENTS],
  imports: [...MODALS_MODULES],
})
export class ProjectsModalsModule {
  constructor() {
  }
}
