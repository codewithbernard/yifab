import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantListItem from './RestaurantListItem';

class RestaurantList extends Component {

  renderRestaurants() {
    if (this.props.restaurants) {
      return _.map(this.props.restaurants, restaurant => {
        return <RestaurantListItem key={restaurant.id} info={restaurant} />
      });
    }
  }

  render() {
    if (this.props.restaurants) {
      return(
        <ul className="collection">
          {this.renderRestaurants()}
        </ul>
      );
    } else {
      return <h3 style={{textAlign: 'center'}}>Start by typing name of the city</h3>
    }
  }
}

function mapStateToProps(state) {
  return {
    restaurants: state.restaurants.businesses
  }
}

export default connect(mapStateToProps)(RestaurantList);
