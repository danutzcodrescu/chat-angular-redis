import { Injectable } from '@angular/core';
import constants from '../../shared/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import User from '../../shared/models/UserModel';

@Injectable()
export class UsersService {

	constructor(private http: HttpClient) { }

	createUser(data) {
		return this.http.post<User>(constants.users, data);
	}

	loginUser(data) {
		const params = new HttpParams()
		.set('username', data.username)
		.set('password', data.password);
		return this.http.get<User[]>(constants.users, {params})
	}

}
