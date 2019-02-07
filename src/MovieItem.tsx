
import React, { Component  } from 'react';



export default class MovieItem extends Component<any> {
	
	movie;
	
	constructor(props) {
		super(props);
		this.movie = props.movie
	}
	
	render() {
		return (
			<p>{this.movie.title}</p>
		);
	}


}
