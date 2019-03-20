import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideos, previousVideos, getNextVideos } from '../actions/videos';
import PropTypes from 'prop-types';
/**
 *Pagination component, previous button to go back to see the previous 12 videos, next button go to see the next 12 videos
 *next button either go to get the data from the redux state or call API
 *
 */
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { getAPI: true };
  }

  nextPage = async () => {
    if (this.state.getAPI) {
      if (this.props.page * 12 < this.props.length) {
        this.props.getNextVideos();
      } else {
        this.setState({ getAPI: false });
        const result = await this.props.getVideos(
          this.props.pageToken,
          this.props.search
        );
        if (result) {
          this.setState({ getAPI: true });
        }
      }
    }
  };

  render() {
    return (
      <div className="Pagination">
        {this.props.search ? (
          <div>
            {this.props.page > 1 ? (
              <button onClick={this.props.previousVideos}> previous </button>
            ) : null}
            {this.props.page}
            <button onClick={this.nextPage}>Next</button>
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
  search: PropTypes.string
};

export default connected(Pagination);
