import React from 'react';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Login extends React.Component<any> {

	user;
	password;
	authStore;
	
	constructor(props) {
		super(props);
		this.authStore = props.rootStore.authStore;
	}
	
	render() {
		
		let handleUser = event => this.user = event.target.value;
		let handlePassword = event => this.password = event.target.value;
		let doLogin = event => this.authStore.login(this.user, this.password);
		
		return this.authStore.isLogged() ? (
				<div>
					<p>Entrou como {this.authStore.loggedUser}.</p>
					<a onClick={() => this.authStore.logout()}>Sair</a>
				</div>
			) : (
				<div className="login-form">
					<label>Usuário:</label>
					<input 
						type="text" 
						value={this.user} 
						maxLength={40}
						onChange={handleUser} />
					<label>Senha:</label>
					<input 
						type="password" 
						onChange={handlePassword}
						value={this.password}  />
					<button onClick={doLogin}>
						Login
					</button>
				</div>
			);
	}

}
