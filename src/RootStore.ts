
import MovieSearchStore from './MovieSearchStore';
import MovieFavoritesStore from './MovieFavoritesStore';
import MovieApi from './MovieApi';

export default class RootStore {

	public movieApi;
	public movieFavoritesStore;
	public movieSearchStore;

	constructor() {
		this.movieApi = new MovieApi();
		this.movieFavoritesStore = new MovieFavoritesStore(this);
		this.movieSearchStore = new MovieSearchStore(this);
	}

}
