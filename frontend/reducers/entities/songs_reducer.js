import { RECEIVE_SONGS } from "../../actions/song_actions";
import { RECEIVE_PLAYLIST, REMOVE_SONG, ADD_SONG } from "../../actions/playlist_actions";

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.songs)
    case RECEIVE_PLAYLIST:
      if (typeof action.payload.songs === 'undefined') {
        return {};
      } else {
        return action.payload.songs
      }
    default:
      return state;
  }
};

export default songsReducer;