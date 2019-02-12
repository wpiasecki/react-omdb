import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Login';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const rootStore = { 
	authStore : { isLogged: () => false } 
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login rootStore={rootStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('updates user value', () => {
	const login = shallow(<Login rootStore={rootStore} />);
	
	login.instance().handleUser({ target: { value: 'echo' } }, true);
	
	expect(login.state('user').value).toEqual('echo');
	expect(login.state('user').valid).toEqual(true);
});


it('updates password value', () => {
	const login = shallow(<Login rootStore={rootStore} />);
	
	login.instance().handlePassword({ target: { value: 'pa' } }, false);
	
	expect(login.state('password').value).toEqual('pa');
	expect(login.state('password').valid).toEqual(false);
});
