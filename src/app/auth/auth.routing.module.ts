import {LoginComponent} from './components/login.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const appRoutes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {

}
