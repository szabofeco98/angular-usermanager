import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserListRoutingModule} from './user.list.routing.module';
import {UserListService} from './service/user-list-service';
import {CommonModule} from '@angular/common';
import {AddressDialogComponent} from "./components/address-dialog/address-dialog.component";

@NgModule({
  declarations: [
    UserListComponent,
    AddressDialogComponent
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
  entryComponents: [AddressDialogComponent],
  bootstrap: [UserListComponent]
})
export class UserListModule {

}
