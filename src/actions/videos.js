import axios from 'axios';

import { NEXT_PAGE, GET_Q, PREVIOUS_PAGE } from './types';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX = 12;
const KEY = 'AIzaSyCY6AZpSw-4mNJRbmCn_Bp8T4jTiANrwjM';
//get the input from the
export function getVideos(pageToken = '', q = '') {
  return async function(dispatch) {
    try {
      // const response = await axios.get(
      //   `${BASE_URL}?key=${KEY}&q=${q}&maxResults=${MAX}&part=snippet&pageToken=${pageToken}&type=video`
      // );
      console.log('next page is here?');
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          key: KEY,
          q,
          pageToken,
          maxResults: MAX,
          part: 'snippet',
          type: 'video'
        }
      });
      console.log(response);
      const nextPageToken = response.data.nextPageToken;
      const videos = response.data.items.map(video => ({
        videoId: video.id.videoId,
        src: video.snippet.thumbnails.medium.url,
        channel: video.snippet.channelTitle,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description
      }));

      // if there is no morevideos
      // if there is no pageToken, dispatch getInitialVideos
      if (!pageToken)
        return dispatch(getInitialVideos(q, nextPageToken, videos));
      // if there is pageToken, dispatch getNewVideos
      if (pageToken) return dispatch(getNewVideos(nextPageToken, videos));
    } catch (err) {
      alert(err);
      console.log('error');
    }
  };
}

function getInitialVideos(q, nextPageToken, videos) {
  return {
    type: GET_Q,
    q,
    nextPageToken,
    videos
  };
}

function getNewVideos(nextPageToken, videos) {
  return {
    type: NEXT_PAGE,
    nextPageToken,
    videos
  };
}

export function previousVideos() {
  return {
    type: PREVIOUS_PAGE
  };
}
