import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto} from '../dto/user-dto';
import {SearchQuerryRequest} from '../dto/SearchQuerryRequest';

@Injectable()
export class UserListService {
  constructor(private http: HttpClient) {
  }

  public getUsers(request: SearchQuerryRequest): Observable<UserDto[]> {
    return this.http.get<UserDto[]>('/user/getAll', {
      params: {
        limit: request.limit,
        page: request.page,
        sortableElem: request.sortableElem,
        sortType: request.sortType
      }
    });
  }

  getUserCount(): Observable<any> {
    return this.http.get('/user/getUserCount', {responseType: 'text'});
  }

  postRegistration(user: UserDto): Observable<any> {
    return this.http.post("/user/registration", user , {responseType: "text"});
  }
}
