import React, { Component } from 'react';

class Search extends Component {
  render() {
    return(
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4 offset-s3">
              <i className="material-icons prefix">location_city</i>
              <input id="icon_prefix" type="text" className="validate"></input>
              <label for="icon_prefix">Postal Code</label>
            </div>
            <div className="input-field col s2">
              <button class="waves-effect waves-light btn">search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
