import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserListRoutingModule} from './user.list.routing.module';
import {UserListService} from './service/user-list-service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    UserListComponent
  ],
    imports: [
        SharedModule,
        HttpClientModule,
        UserListRoutingModule,
        CommonModule,
    ],
  providers: [UserListService],
  exports: [
    UserListComponent
  ],
  bootstrap: [UserListComponent]
})
export class UserListModule {

}