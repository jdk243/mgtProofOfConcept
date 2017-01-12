import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="SearchInput">
				<input type="text" className="CardInput" placeholder="MTG Card Name" value="Nissa"/>
				<button>Search</button>
			</div>
    );
  }
}

export default SearchInput;

