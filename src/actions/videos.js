import axios from 'axios';

import { NEXT_PAGE } from './types';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const LIMIT = 20;

export function getNewJokes(page = 1) {
  return async function(dispatch) {
    //https://icanhazdadjoke.com/search?limit=20&page=2

    console.log('in actions', page);
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=${LIMIT}&page=${page}`
      );
      const jokesWithVotes = response.data.results.map(joke => ({
        ...joke,
        votes: 0
      }));
      if (jokesWithVotes.length === 0) throw new Error('no more jokes');
      page++;
      console.log(page, jokesWithVotes);
      return dispatch(getJokes(jokesWithVotes, page));
    } catch (err) {
      alert(err);
      console.log('error');
    }
  };
}

function getJokes(jokes, page) {
  return {
    type: GET_NEW,
    jokes,
    page
  };
}
export function voteUp(id) {
  return { type: VOTE_UP, id: id };
}

export function voteDown(id) {
  return { type: VOTE_DOWN, id: id };
}
