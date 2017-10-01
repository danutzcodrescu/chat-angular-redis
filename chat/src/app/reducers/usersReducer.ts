import { UserModel } from '../models/UserModel';
import * as UserActions from '../actions//userActions';

export type Action = UserActions.All;

export interface State {
	username: string | null;
	friends: [string];
	conversations: [any];
}

export const initialState: State = {
	username: null,
	friends: new Array(''),
	conversations: new Array
};

export const userReducer = (state: UserModel = initialState, action: Action): State => {
	switch (action.type) {
		case UserActions.LOGIN:
			let newState = {...state};
			return newState = action.payload;

		// case "LOGOUT":
		// 	return state = action.payload;

		default:
			return state;
	}
};

export const getUsername = (state: State) => {
	console.log(state);
	return state;
}


