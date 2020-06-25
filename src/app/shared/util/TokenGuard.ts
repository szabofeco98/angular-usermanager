import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthController} from '../../auth/conroller/auth-controller';
import {map, tap} from 'rxjs/operators';
import {tokenReference} from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authController: AuthController,
    private router: Router,
  ) {
  }

  public canActivate(): Observable<boolean> {
    return this.authController.isLoggedIn$.pipe(
      tap(x => {
        if (!x) {
          this.router.navigateByUrl('/auth/login');
        }
      })
    );
  }
}
