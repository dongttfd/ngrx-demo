import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

interface UserResponse {
    _meta: any;
    result: User[];
}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API = 'https://gorest.co.in/public-api/users?access-token=nciWEkNM9dIYgappAxvnh9zSQeyRFA05TXOS';

    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<UserResponse> {
        return this.httpClient.get<UserResponse>(this.API);
    }
}
