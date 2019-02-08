import MovieApi from "./MovieApi";

import { observable, computed } from 'mobx';

export default class MovieSearchStore {

	@observable movieApi: MovieApi;
	@observable searchText = '';

	constructor(rootStore) {
		this.movieApi = rootStore.movieApi;
	}
	
	search() {
		this.movieApi.search({ t: this.searchText });
	}
	
	get movie() {
		return this.movieApi.movie;
	}
	
}
