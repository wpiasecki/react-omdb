import MovieApi from "./MovieApi";

import { observable, computed } from 'mobx';

export default class MovieSearchStore {

	@observable movieApi: MovieApi;
	@observable searchTitle = '';
	@observable searchYear = '';

	constructor(rootStore) {
		this.movieApi = rootStore.movieApi;
	}
	
	search() {
		this.movieApi.search({ t: this.searchTitle, y: this.searchYear });
	}
	
	get movie() {
		return this.movieApi.movie;
	}
	
}
