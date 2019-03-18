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
  return {
    currentPageVideos: state.videos
  };
}
const connected = connect(mapStateToProps);
export default connected(VideoList);
