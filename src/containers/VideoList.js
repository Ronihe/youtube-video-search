import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';

class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.currentPageVideos.map(video => (
          <VideoCard {...video} key={video.videoId} />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const startIdx = (state.page - 1) * 12;
  const endIdx = startIdx + 11;
  return {
    currentPageVideos: state.videos.slice(startIdx, endIdx)
  };
}
const connected = connect(mapStateToProps);
export default connected(VideoList);
