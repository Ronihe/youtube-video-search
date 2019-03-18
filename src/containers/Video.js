import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component {
  render() {
    console.log('am I the last', this.props.match);
    return (
      <div className="Video">
        <iframe
          title={this.props.video.title}
          width="420"
          height="315"
          src={'https://www.youtube.com/embed/' + this.props.video.videoId}
        />

        <div>
          <h4> {this.props.video.title}</h4>
          <p>
            <small>{this.props.video.channel}</small>
          </p>
          <p>
            {' '}
            <small>{this.props.video.description}</small>
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
  const video = state.videos.filter(
    video => video.videoId === ownProps.match.params.videoId
  )[0];
  return {
    video
  };
}
const connected = connect(mapStateToProps);
export default connected(Video);
