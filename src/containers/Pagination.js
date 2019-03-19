import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos, previousVideos, getNextVideos } from '../actions/videos';
class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        {this.props.search ? (
          <div>
            {this.props.page > 1 ? (
              <button onClick={this.props.previousVideos}> previous </button>
            ) : null}
            {this.props.page}
            <button
              onClick={
                this.props.page * 12 < this.props.length
                  ? this.props.getNextVideos
                  : () => {
                      this.props.getVideos(
                        this.props.pageToken,
                        this.props.search
                      );
                    }
              }
            >
              Next
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('Pagination, what is my state', state);
  return {
    length: state.videos.length,
    page: state.page,
    pageToken: state.nextPageToken,
    search: state.q
  };
}
const connected = connect(
  mapStateToProps,
  { getVideos, previousVideos, getNextVideos }
);
export default connected(Pagination);
