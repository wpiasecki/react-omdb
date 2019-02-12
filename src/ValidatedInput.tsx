import React from 'react';
import styled from 'styled-components';


export default class ValidatedInput extends React.Component<any> {
	
	state;
	
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = Object.assign({},
			{ 
				onChange: this.onChange, 
				onChangeOld: props.onChange, 
				valid: false,
				touched: false,
				errors: [],
				rules: {}
			},
			props);
	}
	
	onChange(event) { 
		const value = event.target.value;
		
		const errors = Object.keys(this.state.rules).filter(
			message => !this.state.rules[message](value) ? message : null);
		
		this.setState({ 
			value: value, 
			valid: errors.length === 0,
			touched: true,
			errors: errors
		});
		
		this.state.onChangeOld(event, errors.length === 0);
	}; 
	
	render() {
		return (
			<span className={"invalid"}>
				<VInput 
					{ ...this.props } 
					className={!this.state.valid && this.state.touched ? 'error' : '' }
					onChange={this.onChange} />
				{ this.state.errors.map(error => <ValidationMessage key={error}>{error}</ValidationMessage>) }
			</span>
		);
	}

}


const VInput = styled.input.attrs({ 
	className: 'form-control mb-2', 
	type: 'text',
})`
	&.error,&.error:focus {
		border: 1px solid darkred;
		box-shadow: 0 0 0 .2rem #ffafaf;
	}
`;


const ValidationMessage = styled.p`
	font-size: 0.8em;
	color: darkred;
`;


