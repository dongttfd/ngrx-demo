import { Action, createReducer, on } from '@ngrx/store';
import {
    loadUsers,
    loadUsersSuccess,
    resetUserErrors,
    createUser,
    createUserSuccess,
    createUserFail,
    // editUser
} from './user.actions';
import { initialState, UserState, mapCreatedErrors } from './user.state';

const reducer = createReducer(
    initialState,

    on(loadUsers, (userState) => ({ ...userState, errors: null })),

    on(loadUsersSuccess, (userState, { users }) => ({ ...userState, errors: null, users })),

    on(resetUserErrors, (userState) => ({ ...userState, errors: null })),

    on(createUser, (userState) => userState),

    on(createUserSuccess, (userState, { user }) => {
        const id = Number(userState.users[userState.users.length - 1].id) + 1;
        const newUser = { ...user, id: String(id) };

        return { users: [...userState.users, newUser], errors: null };
    }),

    on(createUserFail, (userState, { user, message, errors }) => {
        const errorMapped = mapCreatedErrors(message, errors);
        return { ...userState, errors: errorMapped };
    }),

    // on(editUser, (userState) => ({ ...userState, errors: null }))
);

export const userReducer = (
    userState: UserState | undefined,
    action: Action
) => reducer(userState, action);
