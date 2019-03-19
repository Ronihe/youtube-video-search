import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';
import { getVideos, previousVideos, getNextVideos } from '../actions/videos';

class VideoList extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll = async () => {
    if (document.body.scrollHeight - window.innerHeight - window.scrollY <= 0) {
      if (this.props.page * 12 < this.props.length) {
        this.props.getNextVideos();
      } else {
        await this.props.getVideos(this.props.pageToken, this.props.search);
      }

      document.documentElement.scrollTop = 100;
    }
  };

  render() {
    return (
      <div className="videoListWithSeach">
        {this.props.search ? (
          <h5>
            current Search Term is: {this.props.search} | Current Page:{' '}
            {this.props.page}
          </h5>
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
export default connected(VideoList);
