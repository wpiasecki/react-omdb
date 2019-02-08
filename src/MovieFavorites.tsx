import React, { Component } from "react";
import MovieItem from './MovieItem';
import { observer } from 'mobx-react';

@observer
export default class MovieFavorites extends Component<any> {
	
	movieFavoritesStore;
	
	constructor(props) {
		super(props);
		this.movieFavoritesStore = props.movieFavoritesStore;
	}

	render() {
		return (
			<div>
				<p>MovieFavorites</p>
				{
					this.movieFavoritesStore.movies.map(movie => 
						<MovieItem 
							movie={movie} 
							key={movie.imdbID} 
							movieFavoritesStore={this.movieFavoritesStore} />)
				}
			</div>
		);
	}

}
