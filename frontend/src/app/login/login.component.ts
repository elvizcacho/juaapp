import { Component } from '@angular/core';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor() {
    console.log('LoginComponent is loaded');
  }

  public logIn(email: string, password: string): void {
    console.log(email, password);
  }

}
