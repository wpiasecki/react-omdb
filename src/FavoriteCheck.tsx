import React, { Component } from 'react'; 

import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

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
			<input 
				type="checkbox" 
				checked={this.movie.isFavorite}
				onChange={toggleFavorite} />
		) : null;
	}

}
