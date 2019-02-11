import React from 'react';
import ReactDOM from 'react-dom';

import MovieFavorites from './MovieFavorites';

it( 'renders without crashing', () => {
	const div = document.createElement('div');
	
	let mock = jest.fn();
	mock.authStore = { isLogged : () => true };
	mock.movieFavoritesStore = { userFavoriteMovies : [] };
	
	ReactDOM.render(<MovieFavorites rootStore={mock} />, div);
	ReactDOM.unmountComponentAtNode(div);
})



