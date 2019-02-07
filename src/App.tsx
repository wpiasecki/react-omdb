import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import MovieApi from "./MovieApi";
import MovieFavorites from "./MovieFavorites";

import MovieSearchStore from "./MovieSearchStore";

@observer
export default class App extends Component {

	movieApi = new MovieApi();
	movieSearchStore = new MovieSearchStore(this.movieApi);

	get testForEcho() {
		return this.movieSearchStore.searchText;
	}
	
  render() {
    return (
      <div className="App">
				react-omdb {this.testForEcho}
        <div>
        	<MovieSearch movieSearchStore={this.movieSearchStore} />
        	<MovieList movieSearchStore={this.movieSearchStore} />
        	<MovieFavorites />
        </div>
      </div>
    );
  }
}

