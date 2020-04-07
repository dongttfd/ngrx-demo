import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserListResponse, User, UserCreatedResponse } from '../models';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API = 'https://gorest.co.in/public-api/users?_format=json';

    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<UserListResponse> {
        return this.httpClient.get<UserListResponse>(this.API);
    }

    createUser(user: User): Observable<UserCreatedResponse> {
        return this.httpClient.post<UserCreatedResponse>(this.API, user);
    }
}
