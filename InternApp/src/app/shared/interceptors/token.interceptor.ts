import { Injectable } from '@angular/core'; //interceptor (qoshulmaq) request atan zaman requeste qoshulub neyise deyishdire bilmek uchun edirik.
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');
    if (token) {
      const header = req.headers.append('Authorization', 'Token ' + token);
      const newReq = req.clone({ headers: header });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
