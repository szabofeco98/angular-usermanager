import {Component, OnInit} from '@angular/core';
import {AuthController} from '../conroller/auth-controller';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {catchError, map, tap} from 'rxjs/operators';
import {of, throwError} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(public authController: AuthController,
              public router: Router,
              public route: ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.authController.login(this.loginForm.get('username').value, this.loginForm.get('password').value).pipe(
      catchError(err => {
        console.log(err);
        return throwError(err);
      }),
  ).
    subscribe(value => {
      console.log(value);
      if (value) {
        this.router.navigateByUrl('/user-list/users');
      }
    } );


    console.log('szia');
    this.authController.test(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(value => {
      console.log(value);
    });
  }

}
