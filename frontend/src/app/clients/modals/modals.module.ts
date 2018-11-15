import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppMaterialModule} from '../../app.material.module';
import {CreateClientModalComponent} from "./createClient.modal.component";

export const MODALS_COMPONENTS = [
  CreateClientModalComponent
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
export class ClientsModalsModule {
  constructor() {
  }
}
