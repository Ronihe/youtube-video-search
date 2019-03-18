import { GET_Q, NEXT_PAGE } from './actions/types';

function rootReducer(state = { q: '', nextPageToken: '', videos: [] }, action) {
  switch (action.type) {
    // case NEXT_PAGE:
    //   return {
    //     nextPage: action.page,
    //     jokes: [...state.jokes, ...action.jokes]
    //   };

    case GET_Q:
      return {
        q: action.q,
        nextPageToken: action.nextPageToken,
        videos: action.videos
      };

    default:
      return state;
  }
}

export default rootReducer;
