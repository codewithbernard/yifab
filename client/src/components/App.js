import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import RestaurantList from './RestaurantList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <RestaurantList />
      </div>
    );
  }
}

export default App;
