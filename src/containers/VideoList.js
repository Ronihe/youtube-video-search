import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoCard from '../components/VideoCard';
import { getVideos } from '../actions/videos';
const uuidv4 = require('uuid/v4');

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = { getAPI: true };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  infiniteScroll = async () => {
    if (
      document.body.scrollHeight - window.innerHeight - window.scrollY < 50 &&
      this.state.getAPI
    ) {
      this.setState({ getAPI: false });
      let result = await this.props.getVideos(
        this.props.pageToken,
        this.props.search
      );
      if (result) {
        this.setState({ getAPI: true });
      }
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
            <VideoCard {...video} key={uuidv4()} />
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
