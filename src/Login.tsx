import React from 'react';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { Title } from './App';
import ValidatedInput from './ValidatedInput';


@observer
export default class Login extends React.Component<any> {

	authStore;
	state = { 
		user : { 
			value: '',
			valid: false
		}, 
		password: {
			value: '',
			valid: false
	 	}
	};
	
	constructor(props) {
		super(props);
		this.authStore = props.rootStore.authStore;
		this.handleUser = this.handleUser.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.doLogin = this.doLogin.bind(this);
	}
	
	handleUser(event, valid) {
		const value = event.target.value;
		this.setState({ 
			user: { 
				value: event.target.value,
				valid: valid
			} 
		});
	}
	
	handlePassword(event, valid) {
		this.setState({ 
			password: { 
				value: event.target.value,
				valid: valid
			} 
		});
	}
	
	doLogin(event) { 
		if (this.authStore.login(this.state.user.value, this.state.password.value)) {
			this.setState({ user: '', password: '' });
		}
	};
	
	
	render() {
		const userRules = {
			'Campo deve conter pelo menos 3 caracteres' : value => value.length >= 3
		}
		
		const passwordRules = userRules;
	
		return this.authStore.isLogged() ? (
				<Redirect to="/" />
			) : (
				<form>
					<Title>Login</Title>
					<LoginForm>
						<label htmlFor="login-input">Usuário:</label>
						<ValidatedInput 
							value={this.state.user.value} 
							id="login-input"
							rules={userRules}
							placeholder="Usuário"
							onChange={this.handleUser} />
						
						<label>Senha:</label>
						<ValidatedInput 
							onChange={this.handlePassword}
							placeholder="Senha"
							type="password"
							rules={passwordRules}
							value={this.state.password.value}  />
						
						<LoginButton 
							onClick={this.doLogin}
							disabled={!this.state.user.valid || !this.state.password.valid}>
							Login
						</LoginButton>
					</LoginForm>
				</form>
			);
	}
}

const LoginForm = styled.div.attrs({ className: 'form-group' })`
	border: 1px solid #999;
	border-radius: 10px;
	padding: 1em;
	width: 300px;
	margin: 0 auto;
`;

const LoginButton = styled.button.attrs( { className: 'btn btn-primary' })`
	margin-top: 0.5em;
`;


