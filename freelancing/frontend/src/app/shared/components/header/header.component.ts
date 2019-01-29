import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'j-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public constructor(private router: Router) {}

  public goTo(route: string): void {
    this.router.navigate([route]);
  }

}
