import { UserModel } from '../models/UserModel';
import { UserAction } from '../actions//userActions';

const userReducer = (state: UserModel = {username: null}, action: UserAction) => {
	switch (action.type) {
		case "LOGIN":
			let newState = {...state};
			return newState = action.payload;

		case "LOGOUT":
			return state = action.payload;

		default:
			return state;
	}
};

export default userReducer;
