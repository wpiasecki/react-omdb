import React from 'react';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class Login extends React.Component<any> {

	authStore;
	
	state = { user : '', password: '' };
	
	constructor(props) {
		super(props);
		this.authStore = props.rootStore.authStore;
	}
	
	render() {
		
		let handleUser = event => this.setState({ user: event.target.value });
		
		let handlePassword = event => this.setState({ password: event.target.value });
		
		let doLogin = event => { 
			if (this.authStore.login(this.state.user, this.state.password)) {
				this.setState({ user: '', password: '' });
			}
		};
		
		return this.authStore.isLogged() ? (
				<div>
					<p>Entrou como {this.authStore.loggedUser}.</p>
					<a onClick={() => this.authStore.logout()}>Sair</a>
				</div>
			) : (
				<form>
					<div className="login-form">
						<label>Usuário:</label>
						<input 
							type="text" 
							value={this.state.user} 
							onChange={handleUser} />
						<label>Senha:</label>
						<input 
							type="password" 
							onChange={handlePassword}
							value={this.state.password}  />
						<button onClick={doLogin}>
							Login
						</button>
					</div>
				</form>
			);
	}

}
