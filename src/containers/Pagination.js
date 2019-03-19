import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos, previousVideos, getNextVideos } from '../actions/videos';
import PropTypes from 'prop-types';
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

Pagination.propTypes = {
  previousVideos: PropTypes.func.isRequired,
  getNextVideos: PropTypes.func.isRequired,
  getVideos: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  pageToken: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired
};

export default connected(Pagination);
