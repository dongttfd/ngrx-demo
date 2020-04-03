import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userFeatureKey } from './user.reducer';

export const selectUsers = createSelector(
    createFeatureSelector<UserState>(userFeatureKey),
    (state: UserState) => state.users
);
