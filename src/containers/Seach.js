import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos } from '../actions/videos';
import PropTypes from 'prop-types';

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
    this.props.getVideos('', this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="search"
            placeholder="Search"
            value={this.state.search}
            size="60"
          />
          <button> Search </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.q
  };
}
const connected = connect(
  mapStateToProps,
  { getVideos }
);

Search.propTypes = {
  search: PropTypes.string,
  getVideos: PropTypes.func.isRequired
};
export default connected(Search);
