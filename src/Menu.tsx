import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Menu extends React.Component<any> {

	authStore;

	constructor(props) {
		super(props);
		this.authStore = props.rootStore.authStore;
	}

	render() {
		return (
			<MenuWrapper>
					<MenuItem><Link to="/">Buscar</Link></MenuItem>
					{ 
						this.authStore.isLogged() 
							? <MenuItem><Link to="/favorites">Favoritos</Link></MenuItem>
							: null
					}
					{ 
						this.authStore.isLogged() 
							? <MenuItem><Link onClick={() => this.authStore.logout()} to="/">Logout</Link></MenuItem>
							: <MenuItem><Link to="/login">Login</Link></MenuItem>
					}
			</MenuWrapper>
		);
	}


}


const MenuWrapper = styled.ul.attrs({ className: 'nav' })``;
const MenuItem = styled.div.attrs({ className: 'nav-item' })`
	padding: 0.5em;
	border-bottom: 1px solid #555;
	width: 90px;
	margin: 0 0.2em;
	text-align: center
	
	a {
		color: #555;
	}
	a:hover {
		font-weight: bold;
		color: #555;
		text-decoration: none;
	}
`;

