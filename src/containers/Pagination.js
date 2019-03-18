import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos, previousVideos } from '../actions/videos';
class Pagination extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.previousVideos}> Previous </button>
        {this.props.page}
        <button
          onClick={() => {
            this.props.getVideos(this.props.pageToken, this.props.search);
          }}
        >
          Next
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    page: state.page,
    pageToken: state.nextPageToken,
    search: state.q
  };
}
const connected = connect(
  mapStateToProps,
  { getVideos, previousVideos }
);
export default connected(Pagination);
