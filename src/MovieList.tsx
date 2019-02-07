import React, { Component } from 'react';

import { observer } from 'mobx-react';

import MovieSearchStore from './MovieSearchStore';
import MovieItem from './MovieItem';

@observer
export default class MovieList extends Component<any> {
	
	movieSearchStore;
	
	constructor(props) {
		super(props);
		this.movieSearchStore = props.movieSearchStore;
		console.log(props);
	}
	
	render() {
		console.log(this.movieSearchStore);
		return (
			<div className="movie-list">
				<p>MovieList</p>
				{this.movieSearchStore.movies.map(movie => <MovieItem movie={movie} key={movie.id}></MovieItem>)}
			</div>
		);
		
	}

}
