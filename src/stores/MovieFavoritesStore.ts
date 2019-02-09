import { observable, computed, autorun } from 'mobx';


export default class MovieFavoritesStore {
	@observable userFavoriteMovies: any[] = [];
	@observable authStore;
	
	constructor(rootStore) {
		this.authStore = rootStore.authStore;
		autorun(() => this.updateMoviesOnLogin());
	}
	
	updateMoviesOnLogin() {
		this.userFavoriteMovies = this.favoritesFromStorage[this.authStore.loggedUser] || [];
	}
	
	get favoritesFromStorage() {
		return JSON.parse(localStorage.getItem('favoriteMovies') || '{}');
	}
	
	saveMoviesIntoStorage() {
		let allFavorites = this.favoritesFromStorage;
		allFavorites[this.authStore.loggedUser] = this.userFavoriteMovies;
		localStorage.setItem('favoriteMovies', JSON.stringify(allFavorites));
	}
	
	toggleFavorite(movie) {
		let favorite = this.userFavoriteMovies.find(m => m.imdbID === movie.imdbID);
		if (!favorite) {
			this.userFavoriteMovies.push(movie);
			movie.isFavorite = true;
		} else {
			this.userFavoriteMovies = this.userFavoriteMovies.filter(m => m.imdbID !== movie.imdbID);
			movie.isFavorite = false;
		}
		this.saveMoviesIntoStorage();
		
		return movie.isFavorite;
	}
	
	isFavorite(movie): boolean {
		return this.userFavoriteMovies.some(m => m.imdbID === movie.imdbID); 
	}
	
}
