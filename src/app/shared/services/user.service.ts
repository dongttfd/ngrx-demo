import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserListResponse, User, UserResponse, BaseResponse } from '../models';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API = 'https://gorest.co.in/public-api/users?_format=json';

    constructor(private httpClient: HttpClient) { }

    getUsers(): Observable<UserListResponse> {
        return this.httpClient.get<UserListResponse>(this.API);
    }

    createUser(user: User): Observable<UserResponse> {
        return this.httpClient.post<UserResponse>(this.API, user);
    }

    editUser(user: User): Observable<UserResponse> {
        return this.httpClient.put<UserResponse>(
            `https://gorest.co.in/public-api/users/${user.id}`,
            user
        );
    }

    deleteUser(userId: string): Observable<BaseResponse> {
        return this.httpClient.delete<BaseResponse>(`https://gorest.co.in/public-api/users/${userId}`);
    }
}
