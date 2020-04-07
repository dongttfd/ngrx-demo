import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from './user.state';

export const selectUsers = createSelector(
    createFeatureSelector<UserState>(userFeatureKey),
    (state: UserState) => state.users
);

export const selectErrors = createSelector(
    createFeatureSelector<UserState>(userFeatureKey),
    (state: UserState) => state.errors
);
