import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule
];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class AppMaterialModule {
  constructor() {
  }
}
