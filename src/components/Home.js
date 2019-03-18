import React, { Component } from 'react';
import Search from '../containers/Seach';
import VideoList from '../containers/VideoList';
import Pagination from '../containers/Pagination';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Search />
        <VideoList />
        <Pagination />
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
