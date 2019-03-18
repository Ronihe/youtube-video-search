import axios from 'axios';

import { NEXT_PAGE, GET_Q } from './types';
import { bindActionCreators } from 'redux';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX = 12;
const KEY = 'AIzaSyCY6AZpSw-4mNJRbmCn_Bp8T4jTiANrwjM';
//get the input from the
export function getVideos(pageToken = '', q = '') {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${q}&maxResults=${MAX}&part=snippet&pageToken=${pageToken}`
      );

      // reasign the nextPageToken
      const nextPageToken = response.data.nextPageToken;
      const videos = response.data.items.map(video => ({
        title: video.tile,
        publishedAt: video.publishedAt,
        description: video.description
      }));
      // if there is no morevideos
      // if there is pageToken,
      // return dispatch(getJokes(jokesWithVotes, page));
    } catch (err) {
      alert(err);
      console.log('error');
    }
  };
}

function getInitialVideos(q) {
  return {
    type: GET_Q,
    q
  };
}
