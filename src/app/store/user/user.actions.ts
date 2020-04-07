import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { FieldError } from './user.state';

export enum UserActionTypes {
    LoadUsers = '[User] Load Users',
    LoadUsersSuccess = '[User] Load Users Success',

    ResetUserErrors = '[User] Reset Errors',

    CreateUser = '[User] Create User',
    CreateUserSuccess = '[User] Created User Success',
    CreateUserFail = '[User] Created User Fail',

    // EditUser = '[User] Edit User',
    // EditedUserSuccess = '[User] Edited User Success',
    // EditedUserFail = '[User] Edited User Fail',
}

export const loadUsers = createAction(
    UserActionTypes.LoadUsers
);

export const loadUsersSuccess = createAction(
    UserActionTypes.LoadUsersSuccess,
    props<{ users: User[] }>()
);

export const resetUserErrors = createAction(
    UserActionTypes.ResetUserErrors
);

export const createUser = createAction(
    UserActionTypes.CreateUser,
    props<{ user: User }>()
);

export const createUserSuccess = createAction(
    UserActionTypes.CreateUserSuccess,
    props<{ user: User }>()
);

export const createUserFail = createAction(
    UserActionTypes.CreateUserFail,
    props<{ user: User, message: string, errors: FieldError[] }>()
);

// export const editUser = createAction(
//     UserActionTypes.EditUser,
//     props<{ user: User }>()
// );

// export const editedUserSuccess = createAction(
//     UserActionTypes.EditedUserSuccess,
//     props<{ user: User }>()
// );

// export const editedUserFail = createAction(
//     UserActionTypes.EditedUserFail,
//     props<{ user: User, message: string, errors: FieldError[] }>()
// );
