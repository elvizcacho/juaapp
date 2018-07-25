import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng2Webstorage } from 'ngx-webstorage';


import { PageNotFoundComponent } from './shared/components/page-not-found';
import { LoginComponent } from './login';
import { HomeComponent } from './home';

import { LogInService } from './shared/services/login.service';

import { AuthGuard } from './shared/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    Ng2Webstorage.forRoot({prefix: 'juaapp', separator: '_', caseSensitive: true })
  ],
  providers: [LogInService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
