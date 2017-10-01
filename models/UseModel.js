class User {
	constructor(username, password, friends) {
		this.username = username;
		this.password = password;
		this.friends = friends;
		this.conversations = null;
	}

	getPassword() {
		return this.password;
	}

	api() {
		return {
			username: this.username,
			friends: this.friends,
			conversations: this.conversations
		}
	}
}

module.exports = User;