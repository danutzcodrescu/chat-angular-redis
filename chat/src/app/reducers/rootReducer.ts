import { ActionReducerMap } from "@ngrx/store";
import userReducer from './usersReducer';
import ApplicationState from '../store/applicationState';

const reducers: ActionReducerMap<ApplicationState> = {
	user: userReducer
};
export default reducers;

