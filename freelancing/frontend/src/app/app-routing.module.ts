import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment.prod';

// components
import { PageNotFoundComponent } from './shared/components/page-not-found';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { ProjectsComponent } from './projects';
import { TimesheetsComponent } from './projects/timesheets/timesheets.component';
import { ClientsComponent } from './clients/clients.component';

// guards
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'projects/:projectId/timesheets', component: TimesheetsComponent, canActivate: [AuthGuard] // TODO: send to projects module
  },
  {
    path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
