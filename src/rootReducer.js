import {
  GET_Q,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  GET_NEW_VIDEOS
} from './actions/types';

function rootReducer(
  state = { q: '', nextPageToken: '', page: 1, videos: [] },
  action
) {
  switch (action.type) {
    case GET_Q:
      return {
        q: action.q,
        page: state.page,
        nextPageToken: action.nextPageToken,
        videos: action.videos
      };
    case GET_NEW_VIDEOS:
      const newPage = state.page + 1;
      return {
        page: newPage,
        nextPageToken: action.nextPageToken,
        videos: [...state.videos, ...action.videos]
      };
    case PREVIOUS_PAGE:
      const prePage = state.page > 1 ? state.page - 1 : 1;
      return {
        page: prePage,
        nextPageToken: action.nextPageToken,
        videos: [...state.videos]
      };
    case NEXT_PAGE:
      const nextPage = state.page + 1;
      return {
        page: nextPage,
        nextPageToken: action.nextPageToken,
        videos: [...state.videos]
      };

    default:
      return state;
  }
}

export default rootReducer;
