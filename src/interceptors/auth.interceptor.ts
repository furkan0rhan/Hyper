import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    console.log('token', token);
    const fixToken = `Bearer ${token}`;
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', fixToken),
    });
    return next(modifiedReq);
  } else {
    return next(req);
  }
};
