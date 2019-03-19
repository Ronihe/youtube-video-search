import * as actions from './videos';
import * as types from './types';

import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//Testing actions
const q = 'cat';
const nextPageToken = 'testToken';
const videos = [{ test1: 'test1' }, { test2: 'test2' }];

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX = 12;
const KEY = 'testing';

describe('actions', () => {
  it('should create an action to get initial videos from youtube API', () => {
    const expectedAction = {
      type: types.GET_Q,
      q,
      nextPageToken,
      videos
    };
    expect(actions.getInitialVideos(q, nextPageToken, videos)).toEqual(
      expectedAction
    );
  });

  it('should create an action to get new videos from youtube API with nextPageToken', () => {
    const expectedAction = {
      type: types.GET_NEW_VIDEOS,
      nextPageToken,
      videos
    };
    expect(actions.getNewVideos(nextPageToken, videos)).toEqual(expectedAction);
  });
  it('should create an action to get previous videos from state', () => {
    const expectedAction = {
      type: types.PREVIOUS_PAGE
    };
    expect(actions.previousVideos()).toEqual(expectedAction);
  });
  it('should create an action to get next videos from state', () => {
    const expectedAction = {
      type: types.NEXT_PAGE
    };
    expect(actions.getNextVideos()).toEqual(expectedAction);
  });
});

//Tesst Async Action Creators

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.restore();
//   });

//   it('creates getInitialVideos when user put in submit search and getVideos invoked', () => {
//     fetchMock.getOnce(`${BASE_URL}`, {
//       params: {
//         key: KEY,
//         q,
//         pageToken: '',
//         maxResults: MAX,
//         part: 'snippet',
//         type: 'video'
//       }
//     });

//     const expectedActions = [
//       { type: types.d },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     ];
//     const store = mockStore({ todos: [] });

//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
