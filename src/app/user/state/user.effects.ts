import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { loadUsers, loadUsersSuccess } from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(loadUsers().type),
        mergeMap(() => this.userService.getUsers().pipe(
            map(({ result }) => loadUsersSuccess({ users: result }))
        ))
    ));

}
