import { Injectable } from '@angular/core';
import constants from '../../shared/constants';
import { HttpClient} from '@angular/common/http';
import User from '../../shared/models/UserModel';

@Injectable()
export class UsersService {

	constructor(private http: HttpClient) { }

	createUser(data) {
		return this.http.post<User>(constants.users + "/register", data);
	}

	loginUser(data) {
		return this.http.post<User>(constants.users + "/login", data);
	}

}
