import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a  style={{marginLeft: 10}} href="#" className="brand-logo"><i className="material-icons prefix">local_dining</i> Yifab</a>
          <ul id="nav-mobile" className="right">
            <li style={{marginRight: 10}}>Search for worst restaurants in town</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
