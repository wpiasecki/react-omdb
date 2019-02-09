
import { observable } from 'mobx';

export default class AuthStore {

	@observable loggedUser;
	
	constructor() {
		this.loggedUser = localStorage.getItem('loggedUser');
	}
	
	login(user, password) {
		this.loggedUser = user;
		localStorage.setItem('loggedUser', this.loggedUser);
	}
	
	logout() {
		this.loggedUser = null;
		localStorage.removeItem('loggedUser');
	}
	
	isLogged() { 
		return !!this.loggedUser; 
	}
	
}
