import types from '../actions/type';
import initialState from './initialStates';

export default function gameReducer(state = initialState.getGames, action) {
  switch (action.type) {
    case types.GET_GAMES:
      return Object.assign({}, ...state, {
        allGames: action.payload
      });
    default:
      return state;
  }
}