
import React, { Component  } from 'react';

import FavoriteCheck from './FavoriteCheck';

export default class MovieItem extends Component<any> {
	
	movie;
	movieFavoritesStore;
	
	constructor(props) {
		super(props);
		this.movie = props.movie
		this.movieFavoritesStore = props.movieFavoritesStore;
	}
	
	render() {
		return (
			<div>
				<img src={this.movie.Poster}></img>
				<p>{this.movie.Title}</p>
				<FavoriteCheck 
					movie={this.movie}
					movieFavoritesStore={this.movieFavoritesStore} />
			</div>
		);
	}


}
