
import React, { Component  } from 'react';

import FavoriteCheck from './FavoriteCheck';

import styled from 'styled-components';

export default class MovieItem extends Component<any> {
	
	movie;
	movieFavoritesStore;
	
	constructor(props) {
		super(props);
		this.movie = props.movie
		this.movieFavoritesStore = props.rootStore.movieFavoritesStore;
	}
	
	render() {
		return (
			<MovieInfo>
				<Poster>
					<img src={this.movie.Poster}></img>
				</Poster>
				<MovieInformation>
					<li><b>Título:</b> {this.movie.Title}</li>
					<li><b>Lançamento:</b> {this.movie.Released}</li>
					<li><b>Duração:</b> {this.movie.Runtime}</li>
					<li><b>Gênero:</b> {this.movie.Genre}</li>
					<li><b>Diretor:</b> {this.movie.Director}</li>
					<li><b>Escritor:</b> {this.movie.Writer}</li>
					<li><b>Atores:</b> {this.movie.Actors}</li>
					<li><b>Sinopse:</b> {this.movie.Plot}</li>
					<li><b>Avaliações:</b>
						<ul>
						{ this.movie.Ratings.map(rating => 
							<li>{rating.Source}: {rating.Value}</li>)
						}
						</ul>
					</li>
				</MovieInformation>
				<FavoriteCheckCol>
						<div>
						<FavoriteCheck 
							movie={this.movie}
							rootStore={this.props.rootStore} />
						</div>
				</FavoriteCheckCol>
			</MovieInfo>
		);
	}

}


const MovieInfo = styled.div.attrs({ className: '' })`
	display: flex; 
	border: 1px solid #999;
	margin-bottom: 1em;
`;
const Poster = styled.div.attrs({ className: '' })`
	display: inline-block; 
`;
const MovieInformation = styled.ul.attrs({ className: '' })`
	display: inline-block;
	padding-top: 1em;
	flex: 1;
`;
const FavoriteCheckCol = styled.div.attrs({ className: '' })`
	padding: 0 1em;
	float: right;
	text-align: right;
	width: 65px;
`;

