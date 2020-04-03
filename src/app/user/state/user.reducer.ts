import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { User } from 'src/app/shared/models/user.model';

export const userFeatureKey = 'users';

export interface UserState {
    users: User[];
}

export const initialState: UserState = {
    users: []
};

const userReducer = createReducer(
    initialState,
    on(loadUsers, (userState) => userState),
    on(loadUsersFailure, userState => userState),
    on(loadUsersSuccess, (userState, { users }) => ({ ...userState, users })),
);

export function reducer(
    userState: UserState | undefined,
    action: Action
) {
    return userReducer(userState, action);
}
