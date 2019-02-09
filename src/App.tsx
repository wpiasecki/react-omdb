import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import MovieSearch from "./MovieSearch";
import MovieFavorites from "./MovieFavorites";
import RootStore from "./stores/RootStore";
import Login from "./Login";

@observer
export default class App extends Component {

	rootStore = new RootStore();

	get testForEcho() {
		return this.rootStore.movieSearchStore.searchText;
	}
	
  render() {
    return (
      <div className="App">
				<h1>react-omdb {this.testForEcho}</h1>
				<Login rootStore={this.rootStore} />
        <div>
        	<MovieSearch rootStore={this.rootStore} />
        	<MovieFavorites rootStore={this.rootStore} />
        </div>
      </div>
    );
  }
}

