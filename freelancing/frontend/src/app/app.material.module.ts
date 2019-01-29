import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule
} from '@angular/material';

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [...MATERIAL_MODULES]
})
export class AppMaterialModule {
  constructor() {
  }
}
