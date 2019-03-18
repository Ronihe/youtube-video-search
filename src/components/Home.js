import React, { Component } from 'react';
import Search from './Seach';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Search />
      </div>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
