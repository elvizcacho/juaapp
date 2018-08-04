import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule
} from '@angular/material';

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule
];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class AppMaterialModule {
  constructor() {
  }
}
