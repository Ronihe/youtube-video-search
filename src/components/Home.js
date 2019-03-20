import React, { Component } from 'react';
import Search from '../containers/Seach';
import VideoList from '../containers/VideoList';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Search />
        <VideoList />
      </div>
    );
  }
}

export default Home;
