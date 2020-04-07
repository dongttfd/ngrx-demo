import { User } from './user.model';
import { MetaResponse } from './base.response.model';

export interface UserListResponse {
    _meta: MetaResponse;
    result?: User[];
}
