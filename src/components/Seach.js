import React, { Component } from 'react';
import { connect } from 'react-redux';

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
