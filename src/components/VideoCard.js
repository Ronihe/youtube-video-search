import React, { Component } from 'react';
import './VideoCard.css';
import { Link } from 'react-router-dom';
class VideoCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="VideoCard">
        <Link to={'/' + this.props.videoId}>
          <img src={this.props.src} alt={this.props.title} />
          <div>
            <h4> {this.props.title}</h4>
            <p>
              <small>{this.props.publishedAt}</small>
            </p>
            <p>
              {' '}
              <small>{this.props.description}</small>
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

VideoCard.defaultProps = {};
VideoCard.propTypes = {};

export default VideoCard;
