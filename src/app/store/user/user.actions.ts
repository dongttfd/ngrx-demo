import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { FieldError } from './user.state';

export enum UserActionTypes {
    LoadUsers = '[User] Load Users',
    LoadUsersSuccess = '[User] Load Users Success',

    ResetUserErrors = '[User] Reset Errors',

    CreateUser = '[User] Create User',
    CreatedUserSuccess = '[User] Created User Success',
    CreatedUserFail = '[User] Created User Fail',

    EditUser = '[User] Edit User',
    EditedUserSuccess = '[User] Edited User Success',
    EditedUserFail = '[User] Edited User Fail',

    DeleteUser = '[User] Delete User',
    DeletedUserSuccess = '[User] Deleted User Success',
    DeletedUserFail = '[User] Deleted User Fail',
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

export const createdUserSuccess = createAction(
    UserActionTypes.CreatedUserSuccess,
    props<{ user: User }>()
);

export const createdUserFail = createAction(
    UserActionTypes.CreatedUserFail,
    props<{ user: User, message: string, errors: FieldError[] }>()
);

export const editUser = createAction(
    UserActionTypes.EditUser,
    props<{ user: User }>()
);

export const editedUserSuccess = createAction(
    UserActionTypes.EditedUserSuccess,
    props<{ user: User }>()
);

export const editedUserFail = createAction(
    UserActionTypes.EditedUserFail,
    props<{ user: User, message: string, errors: FieldError[] }>()
);

export const deleteUser = createAction(
    UserActionTypes.DeleteUser,
    props<{ user: User }>()
);

export const deletedUserSuccess = createAction(
    UserActionTypes.DeletedUserSuccess,
    props<{ user: User }>()
);

