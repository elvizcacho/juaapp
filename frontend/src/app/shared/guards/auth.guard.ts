import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { LogInService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private logInService: LogInService,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  public checkLogin(url: string): boolean {
    if (this.logInService.isLoggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.logInService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }

}
