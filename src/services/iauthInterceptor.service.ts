import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { IauthService } from './iauth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}

  intercept(req, next) {
    const auth = this.injector.get(IauthService);
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + auth.token)
    });
    return next.handle(authRequest);
  }
}
