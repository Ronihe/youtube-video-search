import reducer from './rootReducer';
import * as types from './actions/types';

describe('videos reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      { q: '', nextPageToken: '', page: 1, videos: [] }
    ]);
  });

  // it('should return initial videos from the youtube API', () => {});
});
