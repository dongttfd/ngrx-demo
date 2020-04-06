import { User } from './user.model';

export interface UserResponse {
    _meta: any;
    result: User[];
}
