import {UserListComponent} from './components/user-list/user-list.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: UserListComponent},
  {path: 'users', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserListRoutingModule {
}
