import axios from 'axios';
import { GET_Q, GET_NEW_VIDEOS } from './types';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX = 12;

//const KEY = 'AIzaSyCY6AZpSw-4mNJRbmCn_Bp8T4jTiANrwjM';
//const KEY = 'AIzaSyAPw5O_9xI4yN_mxAepfwuS_Rn2qZieR5A';
const KEY = 'AIzaSyBYjNe14Q0ik3HdVS-qFZkjadzYQ-iKaA0';

export function getVideos(pageToken = '', q = '') {
  return async function(dispatch) {
    try {
      if (!q) {
        alert('Hi, What videos do you want to search?');
        return;
      }

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
        channel: video.snippet.channelTitle,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description
      }));

      // if there is no pageToken, dispatch getInitialVideos
      if (!pageToken)
        return dispatch(getInitialVideos(q, nextPageToken, videos));

      // if there is pageToken, dispatch getNewVideos
      if (pageToken !== nextPageToken)
        return dispatch(getNewVideos(nextPageToken, videos));
    } catch (err) {
      alert(err);
      console.log('error');
    }
  };
}

export function getInitialVideos(q, nextPageToken, videos) {
  return {
    type: GET_Q,
    q,
    nextPageToken,
    videos
  };
}

export function getNewVideos(nextPageToken, videos) {
  return {
    type: GET_NEW_VIDEOS,
    nextPageToken,
    videos
  };
}
