import React from 'react';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Redirect } from 'react-router-dom';

import styled from 'styled-components';


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
				<Redirect to="/" />
			) : (
				<form>
					<LoginForm>
						<label htmlFor="login-input">Usuário:</label>
						<LoginInput 
							value={this.state.user} 
							onChange={handleUser} />
						<label>Senha:</label>
						<PasswordInput 
							onChange={handlePassword}
							value={this.state.password}  />
						<LoginButton onClick={doLogin}>
							Login
						</LoginButton>
					</LoginForm>
				</form>
			);
	}

}


const LoginForm = styled.div.attrs({ className: 'form-group' })`
	border: 3px solid lightgray;
	border-radius: 10px;
	padding: 1em;
	width: 300px;
	margin: 0 auto;
	margin-top: 50px;
`;

const LoginInput = styled.input.attrs({ 
	className: 'form-control', 
	type: 'input',
	id: 'login-input',
	placeholder: 'Usuário'
})``;

const PasswordInput = styled.input.attrs({ 
	className: 'form-control', 
	type: 'password',
	placeholder: 'Senha'
})``;

const LoginButton = styled.button.attrs( { className: 'btn btn-primary' })`
	margin-top: 0.5em;
`;

