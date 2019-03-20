import { GET_Q, GET_NEW_VIDEOS } from './actions/types';

function rootReducer(state = { q: '', nextPageToken: '', videos: [] }, action) {
  switch (action.type) {
    case GET_Q:
      return {
        q: action.q,
        nextPageToken: action.nextPageToken,
        videos: action.videos
      };
    case GET_NEW_VIDEOS:
      return {
        q: state.q,
        nextPageToken: action.nextPageToken,
        videos: [...state.videos, ...action.videos]
      };

    default:
      return state;
  }
}

export default rootReducer;
