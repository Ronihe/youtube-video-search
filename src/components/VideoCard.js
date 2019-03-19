import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class VideoCard extends Component {
  render() {
    return (
      <div className="VideoCard">
        <Link to={'/' + this.props.videoId}>
          <img src={this.props.src} alt={this.props.title} />
          <div className="cardContent">
            <h5> {this.props.title}</h5>
            <p>
              <small>{this.props.publishedAt}</small>
            </p>
            <p style={{ textAlign: 'left' }}>
              {' '}
              <small>
                <b>Description:</b>
                {this.props.description}
              </small>
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
