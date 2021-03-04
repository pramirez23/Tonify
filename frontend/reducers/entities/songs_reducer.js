import { RECEIVE_SONGS, RECEIVE_SONG } from "../../actions/song_actions";
import { RECEIVE_PLAYLIST, REMOVE_SONG } from "../../actions/playlist_actions";

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.songs)
    // case RECEIVE_SONG:
    //   return Object.assign({}, state, { [action.song.id]: action.song });
    case RECEIVE_PLAYLIST:
      if (typeof action.payload.songs === 'undefined') {
        return {};
      } else {
        return action.payload.songs
      }
    case REMOVE_SONG:
      let newState = Object.assign({}, state);
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};

export default songsReducer;