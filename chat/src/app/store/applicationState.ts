import { State as userState } from '../reducers/usersReducer';

interface AppState {
	user: userState;
}

export default AppState;
