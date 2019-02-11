import React from 'react';
import MovieFavoritesStore from './MovieFavoritesStore';


const rootStore = { authStore: { loggedUser: 'echo' } };
let movie;
let store;


beforeEach(() => {
	movie = { Title: 'Ecco', imdbID: '123' };
	store = new MovieFavoritesStore(rootStore);
	localStorage.removeItem('favoriteMovies');
});


it ('no favorite movies are stored', () => {
	store.updateMoviesOnLogin();
	expect(store.userFavoriteMovies).toEqual([]);
});


it ('favorite movies are stored', () => {
	store.toggleFavorite(movie);
	expect(store.userFavoriteMovies.length).toEqual(1);
	expect(store.isFavorite(movie)).toEqual(true);
});



it ('ecco is not favorite anymore', () => {
	store.toggleFavorite(movie);
	expect(store.userFavoriteMovies.length).toEqual(0);
	expect(store.isFavorite(movie)).toEqual(false);
});
