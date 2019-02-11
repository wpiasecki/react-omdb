import React, { Component } from 'react'; 

import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';

@observer
export default class FavoriteCheck extends Component<any> {

	@observable movieFavoritesStore;
	@observable movie;
	authStore;

	constructor(props) {
		super(props);
		this.movieFavoritesStore = props.rootStore.movieFavoritesStore;
		this.movie = props.movie;
		this.authStore = props.rootStore.authStore;
		this.movie.isFavorite = this.movieFavoritesStore.isFavorite(this.movie);
	}
	
	render() {
		let toggleFavorite = () => 
			this.movieFavoritesStore.toggleFavorite(this.movie);
			
		autorun(() => 
			this.movie.isFavorite = this.movieFavoritesStore.isFavorite(this.movie));
			
		return this.authStore.isLogged() ? (
			<div>
				<StarCheck 
					type="checkbox" 
					id={this.movie.imdbID}
					checked={this.movie.isFavorite}
					onChange={toggleFavorite} />
				<label htmlFor={this.movie.imdbID}></label>
			</div>
		) : null;
	}

}

const StarCheck = styled.input`
	display: none;
	height: 0px;
	
	+label {
		cursor: pointer;
		font-size: 2.5em;
		:before {
			content:'\u2606';
			color: gray;
		}
	}
	
	:checked + label:before {
		content:'\u2605';
		color: #ffd030;
	}
`;

