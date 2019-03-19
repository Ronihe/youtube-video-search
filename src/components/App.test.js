import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../rootReducer';
import thunk from 'redux-thunk';

it('renders without crashing', () => {
  const initialState = { videos: [], page: 1, search: '', nextPageToken: '' };
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  );

  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
