import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_Q } from '../actions/types';

/** Search input form
 *
 * used for searching the keys for the videos: just shows form and tracks input.
 *
 */

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.dispatch({ type: GET_Q });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="search"
            placeholder="Search"
            value={this.state.search}
          />
          <button> Search </button>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {};

Search.propTypes = {};

export default connect()(Search);
