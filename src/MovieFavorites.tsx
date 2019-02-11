import React, { Component } from "react";
import MovieItem from './MovieItem';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Title } from './App';

@observer
export default class MovieFavorites extends Component<any> {
	
	@observable movieFavoritesStore;
	authStore
	
	constructor(props) {
		super(props);
		this.movieFavoritesStore = props.rootStore.movieFavoritesStore;
		this.authStore = props.rootStore.authStore;
	}

	render() {
		return this.authStore.isLogged() ?
		(
			<div>
				<Title>Favoritos</Title>
				{
					this.movieFavoritesStore.userFavoriteMovies.map(movie => 
						<MovieItem 
							movie={movie} 
							key={movie.imdbID} 
							rootStore={this.props.rootStore} />)
				}
			</div>
		) : null;
	}

}
