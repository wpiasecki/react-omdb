
import MovieSearchStore from './MovieSearchStore';
import MovieFavoritesStore from './MovieFavoritesStore';
import MovieApi from './MovieApi';
import AuthStore from './AuthStore';

export default class RootStore {

	movieApi;
	movieFavoritesStore;
	movieSearchStore;
	authStore;

	constructor() {
		this.movieApi = new MovieApi();
		this.authStore = new AuthStore();
		this.movieFavoritesStore = new MovieFavoritesStore(this);
		this.movieSearchStore = new MovieSearchStore(this);
	}

}
