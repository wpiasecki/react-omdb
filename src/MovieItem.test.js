import React from 'react';
import ReactDOM from 'react-dom';
import MovieItem from './MovieItem';


it('renders without crashing', () => {
	
	const movie = { 
		Title: 'The Simpsons',
		Ratings: []
	};
	const rootStore = {
		movieFavoritesStore: { isFavorite: () => true },
		authStore: { isLogged: () => true }
	};
	
  const div = document.createElement('div');
  ReactDOM.render(<MovieItem movie={movie} rootStore={rootStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
