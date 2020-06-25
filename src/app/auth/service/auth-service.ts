import {LoginRequest} from '../dto/loginRequest';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private  http: HttpClient) {
  }


  public login(logingRequest: LoginRequest): Observable<any> {
    return this.http.post('/user/login', logingRequest, {responseType: 'text'});
  }
}
