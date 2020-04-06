import { User } from 'src/app/shared/models/user.model';

export const userFeatureKey = 'userFeature';

export interface UserState {
    users: User[];
}

export const initialState: UserState = {
    users: []
};
