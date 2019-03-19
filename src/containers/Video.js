import React, { Component } from 'react';
import { connect } from 'react-redux';
class Video extends Component {
  render() {
    if (!this.props.video) {
      return <div />;
    }
    return (
      <div className="Video">
        <iframe
          title={this.props.video.title}
          width="100%"
          height="315"
          src={'https://www.youtube.com/embed/' + this.props.video.videoId}
        />

        <div className="VideoContent">
          <h5> {this.props.video.title}</h5>
          <p>
            <small>Channel: {this.props.video.channel}</small>
          </p>
          <p>
            <b>
              <small>{this.props.video.description}</small>
            </b>
          </p>
        </div>
        <button
          onClick={() => {
            this.props.history.push('/');
          }}
        >
          Back to YouTube Home Page{' '}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (state.videos.length === 0) {
    return ownProps.history.push('/');
  }
  const video = state.videos.filter(
    video => video.videoId === ownProps.match.params.videoId
  )[0];
  return {
    video
  };
}
const connected = connect(mapStateToProps);
export default connected(Video);
