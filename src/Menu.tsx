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
				<Link to="/">Buscar Filmes</Link>
				{ 
					this.authStore.isLogged() 
						? <Link to="/favorites">Favoritos</Link>
						: null
				}
				{ 
					this.authStore.isLogged() 
						? <Link onClick={() => this.authStore.logout()} to="/">Logout</Link>
						: <Link to="/login">Login</Link>
				}
				
			</MenuWrapper>
		);
	}


}


const MenuWrapper = styled.ul``;
const SearchLink = styled.li``;
const FavoritesLink = styled(SearchLink)``;
const LoginLink = styled(SearchLink)``;

const LogoutLink = styled(SearchLink);

