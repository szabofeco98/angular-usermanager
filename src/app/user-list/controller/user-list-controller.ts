import {Injectable} from '@angular/core';
import {UserListService} from '../service/user-list-service';
import {Observable, of} from 'rxjs';
import {UserDto} from '../dto/user-dto';
import {SearchQuerryRequest} from '../dto/SearchQuerryRequest';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";
import {AuthController} from "../../auth/conroller/auth-controller";

@Injectable()
export class UserListController {
  constructor(private userListService: UserListService,
              private router:Router,
              private authController: AuthController) {
  }

  public getUsers(page: string, limit: string, sortableElem: string, sortType: string): Observable<UserDto[]> {
    const request: SearchQuerryRequest = {
      sortType,
      sortableElem,
      page,
      limit
    };
    return this.userListService.getUsers(request).pipe(
      catchError(err => {
        if (err.status == 403){
          this.authController.isLoggedIn$.next(false);
          this.router.navigateByUrl("/auth/login");
        }
        return of(err);
      })
    );
  }

  public getUserCount(): Observable<number> {
    return this.userListService.getUserCount().pipe(
      catchError(err => {
        if (err.status == 403){
          this.authController.isLoggedIn$.next(false);
          this.router.navigateByUrl("/auth/login");
        }
        return of(err);
      })
    );
  }

  public registration(user: UserDto): Observable<string>{
    return this.userListService.postRegistration(user);
  }
}
