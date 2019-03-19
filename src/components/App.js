import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Video from '../containers/Video';

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
            Roni's Youtube Project
          </NavLink>
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
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/:videoId"
            render={props => <Video {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
