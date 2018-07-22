import { Component } from '@angular/core';
import { LogInService } from '../shared/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private logInService: LogInService) {}

  public logIn(email: string, password: string): void {
    this.logInService
      .logIn(email, password)
      .subscribe((data: any) => console.log(data));
  }

}
