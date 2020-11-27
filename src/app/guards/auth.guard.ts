import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  canActivate(): boolean {
    if (this.authService.isLogin()) {
      return true;
    }

    this.router.navigate(['/login']).then(r => {
      // TODO: Add message about redirect to login page
    });

    return false;
  }
}
