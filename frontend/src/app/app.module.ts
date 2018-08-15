import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng2Webstorage } from 'ngx-webstorage';


import { ComponentsModule } from './shared/components';

import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { ProjectsComponent } from './projects';
import { TimesheetsComponent } from './projects/timesheets/timesheets.component';

import { LogInService } from './shared/services/login.service';
import { ProjectService } from './shared/services/project.service';
import { TimesheetService } from './shared/services/timesheet.service';

import { AuthGuard } from './shared/guards/auth.guard';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { httpInterceptorProviders } from './shared/interceptors';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProjectsComponent,
    TimesheetsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    Ng2Webstorage.forRoot({prefix: 'juaapp', separator: '_', caseSensitive: true }),
    ComponentsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    })
  ],
  providers: [
    httpInterceptorProviders,
    LogInService,
    AuthGuard,
    ProjectService,
    TimesheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
