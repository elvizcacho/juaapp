import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalsModule } from './modals/modals.module';
import { ProjectsComponent } from './projects.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';
import { AppMaterialModule } from '../app.material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const PROJECT_MODULES = [
  CommonModule,
  FormsModule,
  ModalsModule,
  AppMaterialModule,
];

export const PROJECT_COMPONENTS = [
  ProjectsComponent,
  TimesheetsComponent
];

@NgModule({
  declarations: [...PROJECT_COMPONENTS],
  imports: [
    ...PROJECT_MODULES,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient]
    }
    })
  ],
  exports: [...PROJECT_MODULES]
})
export class ProjectsModule {
  constructor() {
  }
}
