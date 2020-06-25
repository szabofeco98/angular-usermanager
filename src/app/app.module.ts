import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/aut.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BaseInterceptor} from './util/interceptor';
import {UserListModule} from './user-list/user.list.module';
import {AuthController} from './auth/conroller/auth-controller';
import {UserListController} from './user-list/controller/user-list-controller';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    UserListModule,
    SharedModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthController, UserListController, {provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
