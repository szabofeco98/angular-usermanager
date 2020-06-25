import {Injectable} from '@angular/core';
import {UserListService} from '../service/user-list-service';
import {Observable, of} from 'rxjs';
import {UserDto} from '../dto/user-dto';
import {SearchQuerryRequest} from '../dto/SearchQuerryRequest';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class UserListController {
  constructor(private userListService: UserListService) {
  }

  public getUsers(page: string, limit: string, sortableElem: string, sortType: string): Observable<UserDto[]> {
    const request: SearchQuerryRequest = {
      sortType,
      sortableElem,
      page,
      limit
    };
    return this.userListService.getUsers(request);
  }

  public getUserCount(): Observable<number> {
    return this.userListService.getUserCount();
  }
}
