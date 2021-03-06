import reducer from './rootReducer';
import * as types from './actions/types';

describe('videos reducers', () => {
  const q = 'cat';
  let nextPageToken = 'testingToken';
  const videos = [{ test1: 'test1' }, { test2: 'test2' }];

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      q: '',
      nextPageToken: '',
      page: 1,
      videos: []
    });
  });

  it('should handle GET_Q', () => {
    expect(
      reducer(
        {
          q: '',
          nextPageToken: '',
          page: 1,
          videos: []
        },
        {
          type: types.GET_Q,
          q,
          nextPageToken,
          videos
        }
      )
    ).toEqual({
      q,
      page: 1,
      nextPageToken,
      videos
    });
  });

  it('should handle GET_NEW_VIDEOS', () => {
    nextPageToken = 'newTestingToken';
    expect(
      reducer(
        {
          q,
          page: 1,
          nextPageToken,
          videos
        },
        { type: types.GET_NEW_VIDEOS, nextPageToken, videos }
      )
    ).toEqual({
      q,
      page: 2,
      nextPageToken,
      videos: [...videos, ...videos]
    });
  });

  it('should handle PREVIOUS_PAGE', () => {
    expect(
      reducer(
        {
          q,
          page: 2,
          nextPageToken,
          videos: [...videos, ...videos]
        },
        { type: types.PREVIOUS_PAGE, nextPageToken }
      )
    ).toEqual({
      q,
      page: 1,
      nextPageToken,
      videos: [...videos, ...videos]
    });
  });

  it('should handle NEXT_PAGE', () => {
    expect(
      reducer(
        {
          q,
          page: 1,
          nextPageToken,
          videos: [...videos, ...videos]
        },
        { type: types.NEXT_PAGE, nextPageToken }
      )
    ).toEqual({
      q,
      page: 2,
      nextPageToken,
      videos: [...videos, ...videos]
    });
  });
});
