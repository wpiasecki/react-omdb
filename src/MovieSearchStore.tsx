import MovieApi from "./MovieApi";

import { observable } from 'mobx';

export default class MovieSearchStore {

	@observable movieApi: MovieApi;
	@observable searchText = '';

	constructor(movieApi: MovieApi) {
		this.movieApi = movieApi;
	}
	
	search() {
		this.movieApi.search({ t: this.searchText });
	}
	
	get movies() {
		return this.movieApi.movies;
	}
	
}
