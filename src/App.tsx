import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";

@observer
class App extends Component {

	@observable echo = 'test for echo';
	
	@computed get testForEcho() {
		return this.echo;
	}

  render() {
  	
		setTimeout(() => {
			this.echo = "vertigo";
			console.log(this.echo);
		}, 2000);
		
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React {this.testForEcho}
          </a>
        </header>
        <div>
        	<MovieSearch />
        	<MovieList />
        </div>
      </div>
    );
  }
}

export default App;


