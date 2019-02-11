import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Login from "./Login";
import MovieSearch from "./MovieSearch";
import MovieFavorites from "./MovieFavorites";
import RootStore from "./stores/RootStore";


import styled from 'styled-components';


@observer
export default class App extends Component {

	rootStore = new RootStore();

  render() {
    return (
    	<BrowserRouter>
		    <AppContainer>
		    	<Header>
						<Title>react-omdb</Title>
						<Menu>
							<Link to="/">Buscar</Link>
							<Link to="/favorites">Favoritos</Link>
							<Link to="/login">Login</Link>
						</Menu>
					</Header>
		      <div>
		      	<Route 
		      		path="/" 
		      		exact 
		      		render={props => <MovieSearch rootStore={this.rootStore} />} 
		    		/>
		      		
		      	<Route 
		      		path="/favorites" 
		      		render={props => <MovieFavorites rootStore={this.rootStore} />} 
		    		/>
		      	
		      	<Route 
		      		path="/login" 
		      		render={props => <Login rootStore={this.rootStore} />} 
		    		/>
		      	
		      </div>
		    </AppContainer>
      </BrowserRouter>
    );
  }
}

const Menu = styled.ul``;
const SearchLink = styled.li``;
const FavoritesLink = styled(SearchLink)``;
const LoginLink = styled(SearchLink)``;

const AppContainer = styled.div.attrs({ className: 'container' })`
	border: 1px solid red;
`;

const Header = styled.div.attrs({ className: 'row' })``;
const Title = styled.h1.attrs({ className: 'col' })`padding: 0.5em;`;
