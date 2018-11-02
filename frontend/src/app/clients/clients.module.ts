import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients.component';
import { AppMaterialModule } from '../app.material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const CLIENTS_MODULES = [
  CommonModule,
  FormsModule,
  AppMaterialModule,
];

export const CLIENTS_COMPONENTS = [
  ClientsComponent
];

@NgModule({
  declarations: [...CLIENTS_COMPONENTS],
  imports: [
    ...CLIENTS_MODULES,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [...CLIENTS_MODULES]
})
export class ClientsModule {
  constructor() {
  }
}
