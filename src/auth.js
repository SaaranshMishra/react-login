class Auth {
	constructor() {
		this.authenticated = false;
		this.users = [
			{
				email: 'abc@email.com',
				password: '123456'
			},
			{
				email: 'user@email.com',
				password: '123456'
			},
			{
				email: 'jondoe@example.com',
				password: 'grapes'
			}
		];
	}

	login(userCredentials, cb) {
		for(let i = 0; i < this.users.length; i++) {
			if(this.users[i].email === userCredentials.email && this.users[i].password === userCredentials.password) {
				this.authenticated = true;
				break;
			}
		}
		if(this.authenticated === false) {
			alert("Wrong email or password");
		}
		cb();
	}

	social_login(cb) {
		this.authenticated = true;
		cb();
	}

	logout(cb) {
		this.authenticated = false;
		cb();
	}

	isAuthenticated() {
		return this.authenticated;
	}

	registerUser(newUser, cb) {
		this.users.push(newUser);
		this.authenticated = true;
		console.log(this.users)
		cb();
	}
}

export default new Auth();