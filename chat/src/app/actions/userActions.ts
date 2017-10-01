import { Action } from '@ngrx/store';
import { UserModel } from '../models/UserModel';

export const LOGIN  = '[User] Action';


export class LoginAction implements Action {
	readonly type: string = LOGIN;
	constructor (public payload: UserModel) {}
}

export type All
= LoginAction;
