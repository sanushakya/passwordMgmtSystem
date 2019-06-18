import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { IUser } from '../user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient)  {}
    private baseUrl = 'http://localhost:8080/users';
    private url = '/assets/data/users.json';

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.url);
    }

    add(user: User) {
        return this.http.post(this.baseUrl, user);
    }

    /* getUserById(id: number) {
        return this.http.get<User>(this.baseUrl + '/' + id);

    }

    createUser(user: User) {
        return this.http.post(this.baseUrl, user);
    }

    updateUser(user: User) {
        return this.http.put(this.baseUrl + '/' + user.id, user);
    }

    deleteUser(id: string) { 
        return this.http.delete(this.baseUrl + '/' + id);
    } */

}
