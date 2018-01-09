import _ from 'lodash';
import { INIT_LOADING } from '../actions/types';
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
    if (this.props.restaurants && this.props.restaurants == INIT_LOADING) {
      return (
        <div className="row">
          <div className="col s2 offset-s5">            
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-green-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(RestaurantList);
