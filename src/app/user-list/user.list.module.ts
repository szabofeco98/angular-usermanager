import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserListRoutingModule} from './user.list.routing.module';
import {UserListService} from './service/user-list-service';
import {CommonModule} from '@angular/common';
import {AddressDialogComponent} from "./components/address-dialog/address-dialog.component";
import {UserComponent} from "./components/user/user.component";
import {MatDialog} from "@angular/material/dialog";

@NgModule({
  declarations: [
    UserListComponent,
    AddressDialogComponent,
    UserComponent
  ],
    imports: [
        SharedModule,
        HttpClientModule,
        UserListRoutingModule,
        CommonModule,
    ],
  providers: [UserListService, MatDialog],
  exports: [
    UserListComponent
  ],
  entryComponents: [AddressDialogComponent, UserComponent],
  bootstrap: [UserListComponent]
})
export class UserListModule {

}
