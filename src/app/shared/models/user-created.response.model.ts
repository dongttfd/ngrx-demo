import { User } from './user.model';
import { MetaResponse } from './base.response.model';

export interface UserCreatedResponse {
    _meta: MetaResponse;
    result: User | any;
}
