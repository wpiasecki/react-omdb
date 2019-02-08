

import { observable, computed } from 'mobx';


export default class MovieFavoritesStore {
	@observable favoriteMovies: any[];
	
	constructor() {
		this.favoriteMovies = this.getFavoritesFromStorage();
	}
	
	@computed get movies() {
		return this.favoriteMovies;
	}
	
	getFavoritesFromStorage() {
		return JSON.parse(localStorage.getItem('favoriteMovies') || '[]');
	}
	
	saveMoviesIntoStorage() {
		localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
	}
	
	toggleFavorite(movie) {
		let favorite = this.favoriteMovies.find(m => m.imdbID === movie.imdbID);
		if (!favorite) {
			this.favoriteMovies.push(movie);
			movie.isFavorite = true;
		} else {
			this.favoriteMovies = this.favoriteMovies.filter(m => m.imdbID !== movie.imdbID);
			movie.isFavorite = false;
		}
		this.saveMoviesIntoStorage();
		
		return movie.isFavorite;
	}
	
	isFavorite(movie) { 
		return this.favoriteMovies.some(m => m.imdbID === movie.imdbID); 
	}
	
}
