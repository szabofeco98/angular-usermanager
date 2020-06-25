import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class BaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      url: 'http://localhost:9090/server' + req.url,
      setHeaders: {authorization: localStorage.getItem('token') || ''}
    });
    console.log('interceptor');
    return next.handle(modifiedReq);
  }
}
