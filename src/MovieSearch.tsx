import React, { Component } from 'react';

import MovieSearchStore from './stores/MovieSearchStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import MovieItem from "./MovieItem";

@observer
export default class MovieSearch extends Component<any> {

	movieSearchStore;
	movieFavoritesStore;

	constructor(props) {
		super(props);
		this.movieSearchStore = props.rootStore.movieSearchStore;
		this.movieFavoritesStore = props.rootStore.movieFavoritesStore;
	}

	render() {
		let searchMovies = event => 
			this.movieSearchStore.search();
		
		let handleChange = event => 
			this.movieSearchStore.searchText = event.target.value;
	
		return (
			<div className="movie-search">
				<div className="search-input">
					<p>MovieSearch:</p>
					<input type="text" 
								 value={this.movieSearchStore.searchText}
								 onChange={handleChange} />
					<button onClick={searchMovies}>Buscar</button>
				</div>
				<div className="search-result">
					{	
						this.movieSearchStore.movie ?
							<MovieItem 
								movie={this.movieSearchStore.movie} 
								key={this.movieSearchStore.movie.imdbID}
								rootStore={this.props.rootStore} /> : null
					}
				</div>
			</div>
		);
	}

}


