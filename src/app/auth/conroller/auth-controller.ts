import {Injectable} from '@angular/core';
import {AuthService} from '../service/auth-service';
import {LoginRequest} from '../dto/loginRequest';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class AuthController {
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = new BehaviorSubject(false);

    if (localStorage.getItem('token')) {
      this.isLoggedIn$.next(true);
    }
  }

  login(username: string, password: string): Observable<any> {
    const loginRequest: LoginRequest = {
      username,
      password
    };
    let token: string;
    return this.authService.login(loginRequest).pipe(
      map(value => {
          token = value;
          return value !== 'wrong username' && value !== 'wrong password';
        }
      ),
      tap(x => {
        if (x) {
          this.isLoggedIn$.next(true);
          localStorage.setItem('token', token);
        }
      }),
      catchError(err => {
        this.isLoggedIn$.next(false);
        return throwError(err);
      }),
    );
  }


  test(username: string, password: string): Observable<any> {
    const loginRequest: LoginRequest = {
      username,
      password
    };
    return this.authService.login(loginRequest).pipe(
      map(x => {
        x = x + 'anya';
        return x;
      }),
    );
  }
}
