import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import {
    loadUsers,
    loadUsersSuccess,

    createUser,
    createdUserSuccess,
    createdUserFail,

    editUser,
    editedUserSuccess,
    editedUserFail,
    deleteUser,
    deletedUserSuccess
} from './user.actions';
import { UserService } from 'src/app/shared/services';
import { AlertModalStoreActions } from '../alert-modal';

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

    postUser$ = createEffect(() => this.actions$.pipe(
        ofType(createUser),
        mergeMap(action => this.userService.createUser(action.user).pipe(
            map(response => {
                if (response._meta.success) {
                    return createdUserSuccess({ user: response.result });
                }

                return createdUserFail({
                    user: action.user,
                    message: response._meta.message,
                    errors: response.result
                });
            })
        ))
    ));

    // postUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(createUser),
    //     mergeMap(action => of(createdUserSuccess({ user: action.user })))
    // ));

    putUser$ = createEffect(() => this.actions$.pipe(
        ofType(editUser),
        mergeMap(action => this.userService.editUser(action.user).pipe(
            map(response => {
                if (response._meta.success) {
                    return editedUserSuccess({ user: response.result });
                }

                return editedUserFail({
                    user: action.user,
                    message: response._meta.message,
                    errors: response.result
                });
            })
        ))
    ));

    deleteUser = createEffect(() => this.actions$.pipe(
        ofType(deleteUser),
        mergeMap(action => this.userService.deleteUser(action.user.id).pipe(
            map(response => {
                if (response._meta.success) {
                    return deletedUserSuccess({ user: action.user });
                }

                return AlertModalStoreActions.openModal({
                    title: `Fail with status: ${response._meta.code} !!!`,
                    content: response._meta.message
                });
            })
        ))
    ));
}
