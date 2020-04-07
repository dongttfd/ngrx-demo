import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AlertModalStoreActions } from '../store';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private store: Store) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = 'KcD1drjIBAaKUJTI2VCQ_EKVBN4FOl4b98cy';
        request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
                .set('Content-Type', 'application/json;charset=UTF-8')
                .set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            mergeMap(response => {
                return of(response);
            }),
            catchError(error => {
                console.log(error);
                this.store.dispatch(AlertModalStoreActions.openModal({
                    title: `API error {status: ${error.status}}`,
                    content: error.statusText
                }));
                return of(error);
            })
        );

    }
}
