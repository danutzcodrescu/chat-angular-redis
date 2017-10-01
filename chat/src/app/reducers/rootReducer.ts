import { ActionReducerMap } from "@ngrx/store";
import { userReducer as user } from './usersReducer';
import ApplicationState from '../store/applicationState';

const reducers: ActionReducerMap<ApplicationState> = {
	user
};
export default reducers;

