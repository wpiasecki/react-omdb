import MovieApi from "./MovieApi";

import { observable } from 'mobx';

export default class MovieStore {

	@observable movieApi: MovieApi;

	constructor(movieApi: MovieApi) {
		this.movieApi = movieApi;
	}
	
	search(params: any) {
		this.movieApi.search(params);
	}
	
}
