import React from 'react';
import ReactDOM from 'react-dom';

import ValidatedInput from './ValidatedInput';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


const props = { 
	type: 'text',
	onChange: () => {},
	rules: { 'wrong length' : value => value.length >= 5 }
};


it('wrong value', () => {
	const vinput = shallow(<ValidatedInput {...props} />);
	
	vinput.instance().onChange({ target: { value: 'echo' } });
	
	expect(vinput.state('valid')).toEqual(false);
	expect(vinput.state('errors')).toEqual(['wrong length']);
})


it('correct value', () => {
	const vinput = shallow(<ValidatedInput {...props} />);
	
	vinput.instance().onChange({ target: { value: 'echo2' } });
	
	expect(vinput.state('valid')).toEqual(true);
	expect(vinput.state('errors')).toEqual([]);
})



