import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';
import Search from './Search'

class App extends Component {
  render() {
    return (
      <div className="App">
				<PageHeader>
					<a href="#">MTG Card Search Prototype</a>
				</PageHeader>
				<Search/>
      </div>
    );
  }
}

export default App;
