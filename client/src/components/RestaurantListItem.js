import React, { Component } from 'react';

class RestaurantListItem extends Component {
  render() {
    let { info } = this.props;

    if (info) {
      return(
        <li key={info.id} className="collection-item avatar">
          <img src={info.image_url} alt={info.name} className="circle" />
          <span className="title">{info.name}</span>
          <p>{info.location.address1 + ', ' + info.location.city}</p>
          <a href={info.url} target="_blank" className="secondary-content"><i className="material-icons">forward</i></a>
        </li>
      );
    }
  }
}

export default RestaurantListItem;
