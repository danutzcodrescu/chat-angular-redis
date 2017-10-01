export interface UserModel {
	username: string | null;
	friends: [string];
	conversations: [any];
}
