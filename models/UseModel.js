class User {
	constructor(username, password) {
		this.username = username;
		this.password = password;
	}

	getPassword() {
		return this.password;
	}

	api() {
		return {
			username: this.username
		}
	}
}

module.exports = User;