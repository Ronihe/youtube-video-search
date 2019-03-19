import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';
import './videoList.css';
class VideoList extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  async infiniteScroll() {
    if (document.body.scrollHeight - window.innerHeight - window.scrollY < 50) {
      // go to next page
    }
  }

  render() {
    return (
      <div className="videoList">
        {this.props.currentPageVideos.map(video => (
          <VideoCard {...video} key={video.videoId} />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const startIdx = (state.page - 1) * 12;
  const endIdx = startIdx + 12;
  return {
    currentPageVideos: state.videos.slice(startIdx, endIdx)
  };
}
const connected = connect(mapStateToProps);
export default connected(VideoList);
