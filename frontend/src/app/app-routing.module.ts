import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment.prod';

import { PageNotFoundComponent } from './shared/components/page-not-found';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
