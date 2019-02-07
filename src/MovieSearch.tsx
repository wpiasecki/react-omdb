import React, { Component } from 'react';

import MovieSearchStore from './MovieSearchStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class MovieSearch extends Component<any> {

	movieSearchStore: MovieSearchStore;

	constructor(props) {
		super(props);
		this.movieSearchStore = props.movieSearchStore;
	}

	render() {
	
		let searchMovies = event => 
			this.movieSearchStore.search();
		
		let handleChange = event => 
			this.movieSearchStore.searchText = event.target.value;
	
		return (
			<div className="movie-search">
				<p>MovieSearch Component</p>
				<input type="text" 
							 value={this.movieSearchStore.searchText}
							 onChange={handleChange} />
				<button onClick={searchMovies}>Buscar</button>
			</div>
		);
	}

}


