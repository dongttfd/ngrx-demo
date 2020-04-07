import { Action, createReducer, on } from '@ngrx/store';
import {
    loadUsers,
    loadUsersSuccess,
    resetUserErrors,
    createUser,
    createdUserSuccess,
    createdUserFail,
    editUser,
    editedUserSuccess,
    editedUserFail,
    deleteUser,
    deletedUserSuccess
} from './user.actions';
import { initialState, UserState, mapResponseErrors } from './user.state';

const reducer = createReducer(
    initialState,

    on(loadUsers, (userState) => ({ ...userState, errors: null })),
    on(loadUsersSuccess, (userState, { users }) => ({ ...userState, errors: null, users })),

    on(resetUserErrors, (userState) => ({ ...userState, errors: null })),

    on(createUser, (userState) => ({ ...userState, errors: null })),
    on(createdUserSuccess, (userState, { user }) => {
        const id = Number(userState.users[userState.users.length - 1].id) + 1;
        const newUser = { ...user, id: String(id) };

        return { users: [...userState.users, newUser], errors: null };
    }),
    on(createdUserFail, (userState, { message, errors }) => {
        const errorMapped = mapResponseErrors(message, errors);
        return { ...userState, errors: errorMapped };
    }),

    on(editUser, (userState) => ({ ...userState, errors: null })),
    on(editedUserSuccess, (userState, { user }) => {
        const userIndex = userState.users.findIndex(u => u.id === user.id);
        const newUsers = [...userState.users];
        newUsers[userIndex] = { ...user };

        return { ...userState, users: newUsers };
    }),
    on(editedUserFail, (userState, { message, errors }) => {
        const errorMapped = mapResponseErrors(message, errors);
        return { ...userState, errors: errorMapped };
    }),

    on(deleteUser, (userState) => ({ ...userState, errors: null })),
    on(deletedUserSuccess, (userState, { user }) => {
        const newUsers = [...userState.users].filter(u => u.id !== user.id);

        console.log(userState.users, user);
        return { ...userState, users: newUsers};
    }),
);

export const userReducer = (
    userState: UserState | undefined,
    action: Action
) => reducer(userState, action);
