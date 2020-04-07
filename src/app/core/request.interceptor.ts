import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = 'KcD1drjIBAaKUJTI2VCQ_EKVBN4FOl4b98cy';
        request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
                .set('Content-Type', 'application/json;charset=UTF-8')
                .set('Accept', 'application/json')
        });

        return next.handle(request);
    }
}
