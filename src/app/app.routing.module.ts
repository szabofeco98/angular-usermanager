import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthenticationGuard} from './shared/util/TokenGuard';


const lazyImports = {
  Authentication: () => import('./auth/aut.module.js').then(module => module.AuthModule),
  UserList: () => import('./user-list/user.list.module.js').then(module => module.UserListModule)
};

const appRoutes = [
  {path: 'auth', loadChildren: lazyImports.Authentication},
  {path: 'user-list', loadChildren: lazyImports.UserList, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
