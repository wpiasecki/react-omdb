import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

it('renders without crashing', () => {
	const rootStore = { 
		authStore : { isLogged: () => false } 
	};
  const div = document.createElement('div');
  ReactDOM.render(<Login rootStore={rootStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


