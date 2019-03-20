import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';
import { getVideos } from '../actions/videos';

class VideoList extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll = async () => {
    if (
      document.body.scrollHeight - window.innerHeight - window.scrollY <=
      400
    ) {
      await this.props.getVideos(this.props.pageToken, this.props.search);
    }
  };

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
  return {
    length: state.videos.length,
    pageToken: state.nextPageToken,
    search: state.q,
    currentPageVideos: state.videos
  };
}
const connected = connect(
  mapStateToProps,
  { getVideos }
);
export default connected(VideoList);
