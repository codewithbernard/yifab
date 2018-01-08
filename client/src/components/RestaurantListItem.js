import React, { Component } from 'react';

class RestaurantListItem extends Component {
  render() {
    let { info } = this.props;

    return(
      <li className="collection-item avatar">
        <img src={info.image_url} alt={info.name} className="circle" />
        <span className="title">{info.name}</span>
        <p>{info.location.address1 + ', ' + info.location.city}</p>
        <a href={info.url} target="_blank" class="secondary-content"><i class="material-icons">forward</i></a>
      </li>
    )
  }
}

export default RestaurantListItem;
