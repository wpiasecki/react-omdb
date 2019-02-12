import React, { Component } from 'react';
import styled from 'styled-components';

import BlockUi from 'react-block-ui';
require('react-block-ui/style.css');
import InputMask from 'react-input-mask';

import MovieSearchStore from './stores/MovieSearchStore';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import MovieItem from "./MovieItem";
import { Title } from './App';

@observer
export default class MovieSearch extends Component<any> {

	movieSearchStore;
	movieFavoritesStore;
	state;

	constructor(props) {
		super(props);
		this.movieSearchStore = props.rootStore.movieSearchStore;
		this.movieFavoritesStore = props.rootStore.movieFavoritesStore;
		this.state = { 
			blocking: false,
			firstSearch: false
		};
	}
	
	handleTitleChange = event => 
		this.movieSearchStore.searchTitle = event.target.value;
	
	handleYearChange = event => 
		this.movieSearchStore.searchYear = event.target.value;
	
	searchOnEnter = target => 
		target.charCode == 13 ? this.searchMovies(target) : null;

	withLoading = promise => {
		this.setState({ blocking: true });
		
		// este timeout é para poder visualizar o bloqueio de UI para fins do desafio
		setTimeout(() => 
			promise().then(() => 
				this.setState({ blocking: false, firstSearch: true }) ), 500);
	};
	
	searchMovies = event => this.withLoading(() => this.movieSearchStore.search());
	

	render() {
		return (
			<div>
				<BlockUi tag="div" blocking={this.state.blocking}>
					<Title>Pesquisa de filmes</Title>
					<SearchForm>
						<div className="search-input">
							<label>Digite o nome, ou parte, do filme ou seriado:</label>
							<SearchInput 
								value={this.movieSearchStore.searchTitle}
								onChange={this.handleTitleChange}
								onKeyPress={this.searchOnEnter}
								placeholder="Título" />
							<label>Ano (opcional):</label>
							<MaskSearchInput
								mask="9999"
								value={this.movieSearchStore.searchYear}
								placeholder="Ano"
								onKeyPress={this.searchOnEnter}
								onChange={this.handleYearChange} />
							<SearchButton 
								disabled={!this.movieSearchStore.searchTitle.length}
								onClick={this.searchMovies}>
								Buscar
							</SearchButton>
						</div>
					</SearchForm>
					<SearchResult>
						{	
							this.movieSearchStore.movie ?
								<MovieItem 
									movie={this.movieSearchStore.movie} 
									key={this.movieSearchStore.movie.imdbID}
									rootStore={this.props.rootStore} /> 
									: this.state.firstSearch 
										? <NoResult>Nenhum filme encontrado</NoResult> 
										: null
						}
					</SearchResult>
				</BlockUi>
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

const MaskSearchInput = styled(InputMask).attrs({ 
	className: 'form-control mb-2', 
	type: 'text' })``;

const SearchButton = styled.button.attrs({ className: 'btn btn-primary' })``;
const SearchResult = styled.div`margin-top: 10px;`
const NoResult = styled.div`
	text-align: center;
	margin-top: 2em;
`;
