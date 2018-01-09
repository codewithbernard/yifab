import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.initLoading();
    this.props.fetchRestaurants(this.state.city);
  }

  render() {
    return(
      <div className="row">
        <form className="col s12" onSubmit={e => {this.handleSubmit.bind(this);this.handleSubmit(e)}}>
          <div className="row">
            <div className="input-field col s4 offset-s3">
              <i className="material-icons prefix">location_city</i>
              <input placeholder="City" onChange={e => this.setState({city: e.target.value})} value={this.state.city} id="city" type="text" className="validate"></input>
            </div>
            <div className="input-field col s2">
              <button type="submit" className="waves-effect waves-light btn">search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(Search);
