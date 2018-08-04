import { Component } from '@angular/core';
import { LogInService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private logInService: LogInService) {

  }

  public isLoggedIn(): boolean {
    return this.logInService.isLoggedIn();
  }
}
