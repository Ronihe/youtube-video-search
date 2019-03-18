import React, { Component } from 'react';

class Video extends Component {
  render() {
    console.log(this.props);
    return <div className="Video" />;
  }
}

Video.defaultProps = {};

Video.propTypes = {};

export default Video;
