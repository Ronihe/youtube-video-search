import * as actions from './videos';
import * as types from './types';

//Testing actions

describe('actions', () => {
  const q = 'cat';
  const nextPageToken = 'testToken';
  const videos = [{ test1: 'test1' }, { test2: 'test2' }];

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
