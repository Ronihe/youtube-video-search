import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';
import { getVideos, previousVideos, getNextVideos } from '../actions/videos';
import PropTypes from 'prop-types';

class VideoList extends Component {
  render() {
    return (
      <div className="videoListWithSeach">
        {this.props.search ? (
          <h5>Current Search Term is: {this.props.search}</h5>
        ) : null}
        <div className="videoList">
          {this.props.currentPageVideos.map(video => (
            <VideoCard {...video} key={video.videoId} />
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const startIdx = (state.page - 1) * 12;
  const endIdx = startIdx + 12;
  return {
    length: state.videos.length,
    pageToken: state.nextPageToken,
    page: state.page,
    search: state.q,
    currentPageVideos: state.videos.slice(startIdx, endIdx)
  };
}
const connected = connect(
  mapStateToProps,
  { getVideos, previousVideos, getNextVideos }
);

VideoList.propTypes = {
  currentPageVideos: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  pageToken: PropTypes.string.isRequired,
  search: PropTypes.string,
  previousVideos: PropTypes.func.isRequired,
  getNextVideos: PropTypes.func.isRequired,
  getVideos: PropTypes.func.isRequired
};
export default connected(VideoList);
