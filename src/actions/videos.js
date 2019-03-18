import axios from 'axios';

import { NEXT_PAGE, GET_Q } from './types';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX = 12;
const KEY = 'AIzaSyCY6AZpSw-4mNJRbmCn_Bp8T4jTiANrwjM';
//get the input from the
export function getVideos(pageToken = '', q = '') {
  return async function(dispatch) {
    try {
      console.log('am I here');
      // const response = await axios.get(
      //   `${BASE_URL}?key=${KEY}&q=${q}&maxResults=${MAX}&part=snippet&pageToken=${pageToken}&type=video`
      // );
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

      const nextPageToken = response.data.nextPageToken;
      const videos = response.data.items.map(video => ({
        videoId: video.id.videoId,
        src: video.snippet.thumbnails.medium.url,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description
      }));

      // if there is no morevideos
      // if there is no pageToken, dispatch getInitialVideos
      if (!pageToken)
        return dispatch(getInitialVideos(q, nextPageToken, videos));

      // return dispatch(getJokes(jokesWithVotes, page));
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

// https://www.youtube.com/watch?v='this is the video ID'
// function getNewVideos(q, nextPageToken, videos) {
//   return {
//     type: GET_Q,
//     q,
//     nextPageToken,
//     videos
//   };
// }
