import React, { Component } from 'react';

import MovieSearchStore from './stores/MovieSearchStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import MovieItem from "./MovieItem";

import styled from 'styled-components';
import { Title } from './App';

@observer
export default class MovieSearch extends Component<any> {

	movieSearchStore;
	movieFavoritesStore;

	constructor(props) {
		super(props);
		this.movieSearchStore = props.rootStore.movieSearchStore;
		this.movieFavoritesStore = props.rootStore.movieFavoritesStore;
	}

	render() {
		let searchMovies = event => 
			this.movieSearchStore.search();
		
		let handleTitleChange = event => 
			this.movieSearchStore.searchTitle = event.target.value;
	
		let handleYearChange = event => 
			this.movieSearchStore.searchYear = event.target.value;
		
		let searchOnEnter = target => target.charCode == 13 ? this.movieSearchStore.search() : null;
		
		return (
			<div>
				<Title>Pesquisa de filmes</Title>
				<SearchForm>
					<div className="search-input">
						<label>Digite o nome, ou parte, do filme ou seriado:</label>
						<SearchInput 
							value={this.movieSearchStore.searchTitle}
							onChange={handleTitleChange}
							onKeyPress={searchOnEnter}
							placeholder="Título" />
						<label>Ano (opcional):</label>
						<SearchInput 
							value={this.movieSearchStore.searchYear}
							placeholder="Ano"
							onKeyPress={searchOnEnter}
							onChange={handleYearChange} />
						<SearchButton onClick={searchMovies}>Buscar</SearchButton>
					</div>
				</SearchForm>
				<SearchResult>
					{	
						this.movieSearchStore.movie ?
							<MovieItem 
								movie={this.movieSearchStore.movie} 
								key={this.movieSearchStore.movie.imdbID}
								rootStore={this.props.rootStore} /> : <NoResult>Nenhum filme encontrado</NoResult>
					}
				</SearchResult>
			</div>
		);
	}

}

const SearchForm = styled.div.attrs({ 
	className: 'form-group' 
})`
	border: 1px solid #999;
	border-radius: 10px;
	padding: 1em;
`;
const SearchInput = styled.input.attrs({ 
	className: 'form-control mb-2', 
	type: 'text' })`
`;
const SearchButton = styled.button.attrs({ className: 'btn btn-primary' })``;
const SearchResult = styled.div`margin-top: 10px;`
const NoResult = styled.div`
	text-align: center;
	margin-top: 2em;
`;
