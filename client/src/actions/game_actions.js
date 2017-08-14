import axios from 'axios';

import types from './type';

export function getGamesSuccess(payload) {
  return {
    type: types.GET_GAMES,
    payload
  }
}

export function getGames() {
  return dispatch => axios.get('http://localhost:3001/api/games')
  .then((result) => {
    const games = result.data.games;
    dispatch(getGamesSuccess(games));
  }).catch((error) => {
    console.log(error, 'error from actions');
    // dispatch(getGameError(error))
  });

}