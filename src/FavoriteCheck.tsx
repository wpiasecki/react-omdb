import React, { Component } from 'react'; 

import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class FavoriteCheck extends Component<any> {

	movieFavoritesStore;
	@observable movie;

	constructor(props) {
		super(props);
		this.movieFavoritesStore = props.movieFavoritesStore;
		this.movie = props.movie;
		this.movie.isFavorite = this.movieFavoritesStore.isFavorite(this.movie);
	}

	render() {
		let toggleFavorite = () => 
			this.movieFavoritesStore.toggleFavorite(this.movie);
	
		return (
			<input 
				type="checkbox" 
				checked={this.movie.isFavorite}
				onChange={toggleFavorite} />
		);
	}

}
