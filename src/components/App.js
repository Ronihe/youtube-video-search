import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';

/** Overall youtube search application :
 *
 * - shows header, nav links, and contains routes to:
 *   - homepage
 *   - individual video
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink exact to="/">
            Home Page
          </NavLink>
          <a
            href="https://github.com/Ronihe/youtube-video-search"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </header>

        <Switch>
          {/* <Route exact path="/new"
                 render={(props) => <Video {...props} />} /> */}
          <Route exact path="/" render={() => <Home />} />
          {/* <Route exact path="/:postId"
                 render={(props) => <Post {...props} />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
