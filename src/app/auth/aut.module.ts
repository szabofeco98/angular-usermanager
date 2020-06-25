import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {LoginComponent} from './components/login.component';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from './service/auth-service';
import {AuthController} from './conroller/auth-controller';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth.routing.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [AuthService],
  exports: [
    LoginComponent
  ],
  bootstrap: [LoginComponent]
})
export class AuthModule {

}
