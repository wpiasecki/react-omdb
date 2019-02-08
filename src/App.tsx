import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import MovieSearch from "./MovieSearch";
import MovieApi from "./MovieApi";
import MovieFavorites from "./MovieFavorites";
import MovieSearchStore from "./MovieSearchStore";
import MovieFavoritesStore from "./MovieFavoritesStore";

@observer
export default class App extends Component {

	movieApi = new MovieApi();
	movieSearchStore = new MovieSearchStore(this.movieApi);
	movieFavoritesStore = new MovieFavoritesStore();

	get testForEcho() {
		return this.movieSearchStore.searchText;
	}
	
  render() {
    return (
      <div className="App">
				<h1>react-omdb {this.testForEcho}</h1>
        <div>
        	<MovieSearch 
        		movieSearchStore={this.movieSearchStore}
        		movieFavoritesStore={this.movieFavoritesStore} />
        	<MovieFavorites 
        		movieFavoritesStore={this.movieFavoritesStore} />
        </div>
      </div>
    );
  }
}

