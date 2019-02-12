import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MovieSearch from './MovieSearch';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let rootStore;

beforeEach(() => {
	rootStore = { 
		movieFavoritesStore : {} ,
		movieSearchStore: { searchTitle: '' },
	};
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieSearch rootStore={rootStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('handle change', () => {
	const movieSearch = shallow(<MovieSearch rootStore={rootStore} />);
	
	movieSearch.instance().handleTitleChange({target: { value: 'echo' }});
	movieSearch.instance().handleYearChange({target: { value: '1986' }});
	
	expect(rootStore.movieSearchStore.searchTitle).toEqual('echo');
	expect(rootStore.movieSearchStore.searchYear).toEqual('1986');
});

it('search on enter', () => {
	const movieSearch = shallow(<MovieSearch rootStore={rootStore} />);
	
	movieSearch.instance().handleTitleChange({target: { value: 'echo' }});
	movieSearch.instance().handleYearChange({target: { value: '1986' }});
	
	movieSearch.instance().searchOnEnter({ charCode: 13 });
	
	expect(rootStore.movieSearchStore.searchTitle).toEqual('echo');
	expect(rootStore.movieSearchStore.searchYear).toEqual('1986');
});


