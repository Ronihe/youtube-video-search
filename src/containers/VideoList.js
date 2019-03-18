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
  console.log(state.page, state.videos.slice(state.page - 1, state.page + 11));
  return {
    currentPageVideos: state.videos.slice(state.page - 1, state.page + 11)
  };
}
const connected = connect(mapStateToProps);
export default connected(VideoList);
