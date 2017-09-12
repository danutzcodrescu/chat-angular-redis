import { Action } from '@ngrx/store';
import { UserModel } from '../models/UserModel';

export class UserAction implements Action {
	readonly type: string;
	constructor(public payload?: any) { }
}

export class LoginAction implements UserAction {
	readonly type: string = "LOGIN";
	constructor (public payload: UserModel) {}
}
