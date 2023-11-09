import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiBaseUrl = 'http://localhost:8000';
    const apiReq = req.clone({ url: `${apiBaseUrl}/${req.url}` });
    return next.handle(apiReq);
  }
}
