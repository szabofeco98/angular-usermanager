import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthController} from '../../../auth/conroller/auth-controller';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogedIn$: Observable<boolean>;

  constructor(private authController: AuthController) { }

  ngOnInit(): void {
    this.isLogedIn$ = this.authController.isLoggedIn$;
    this.isLogedIn$.subscribe(value => {
      console.log(value);
    });
  }

}
