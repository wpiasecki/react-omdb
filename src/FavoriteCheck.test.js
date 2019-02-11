import React from 'react';
import ReactDOM from 'react-dom';
import FavoriteCheck from './FavoriteCheck';


it('renders without crashing', () => {
	const movie = { Title: 'The Simpsons' };
	const rootStore = {
		movieFavoritesStore: {
			isFavorite: () => true
		},
		authStore: { isLogged: () => true }
	};
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteCheck rootStore={rootStore} movie={movie} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
