import * as actions from './videos';
import * as types from './types';

import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//Testing actions
const q = 'cat';
const nextPageToken = 'testToken';
const videos = [{ test1: 'test1' }, { test2: 'test2' }];

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
});

//Tesst Async Action Creators

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates getInitialVideos when user put in submit search and getVideos invoked', () => {
    const store = mockStore();

    return store.dispatch(actions.getVideos('', q)).then(() => {
      // return of async actions
      expect(store.getActions()[0]).toHaveProperty('nextPageToken');
      expect(store.getActions()[0]).toHaveProperty('q');
      expect(store.getActions()[0]).toHaveProperty('type');
      expect(store.getActions()[0]).toHaveProperty('videos');
      expect(store.getActions()[0].videos.length).toBe(12);
    });
  });
});
