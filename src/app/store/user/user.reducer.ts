import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { initialState, UserState } from './user.state';

const reducer = createReducer(
    initialState,
    on(loadUsers, (userState) => userState),
    on(loadUsersFailure, userState => userState),
    on(loadUsersSuccess, (userState, { users }) => ({ ...userState, users })),
);

export const userReducer = (
    userState: UserState | undefined,
    action: Action
) => reducer(userState, action);
