import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
