import React, { Component } from 'react';

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
    // dispatch the
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <div class="form-group"> */}
          <input
            onChange={this.handleChange}
            // id="commentform-text"
            name="search"
            placeholder="Search"
            // className="form-control"
            value={this.state.search}
          />
          {/* </div> */}
          <button> Search </button>
        </form>
      </div>
    );
  }
}

Search.defaultProps = {};

Search.propTypes = {};

export default Search;
