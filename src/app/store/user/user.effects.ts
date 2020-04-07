import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap, catchError } from 'rxjs/operators';
import { loadUsersSuccess, createUser, createUserSuccess, UserActionTypes, loadUsers, createUserFail } from './user.actions';
import { UserService } from 'src/app/shared/services';
import { AlertModalStoreActions } from '../alert-modal';
import { throwError, of, Observable } from 'rxjs';
import { throws } from 'assert';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        mergeMap(() => this.userService.getUsers().pipe(
            map((response) => {
                if (!response._meta.success) {
                    return AlertModalStoreActions.openModal({
                        title: `Fail ${response._meta.code} !!!`,
                        content: response._meta.message
                    });
                }
                return loadUsersSuccess({ users: response.result });
            })
        ))
    ));

    // postUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(createUser),
    //     mergeMap(action => this.userService.createUser(action.user).pipe(
    //         map(response => {
    //             if (response._meta.success) {
    //                 return createUserSuccess({ user: response.result });
    //             }

    //             return createUserFail({
    //                 user: action.user,
    //                 message: response._meta.message,
    //                 errors: response.result
    //             });
    //         })
    //     ))
    // ));

    postUser$ = createEffect(() => this.actions$.pipe(
        ofType(createUser),
        mergeMap(action => of(createUserSuccess({ user: action.user })))
    ));

    putUser$ = createEffect(() => this.actions$.pipe());
}
