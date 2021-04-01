import { RECEIVE_SONGS } from "../../actions/song_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";
import { RECEIVE_ALBUM } from "../../actions/album_actions";
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_LIKED_SONGS, REMOVE_SONG } from "../../actions/library_actions";
import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.payload.songs;
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.songs);
    case RECEIVE_LIKED_SONGS:
      return action.payload.likedSongs;
    case RECEIVE_PLAYLIST:
      if (!action.payload) {
        return state;
      } else if (typeof action.payload.songs === 'undefined') {
        return {};
      } else {
        return action.payload.songs;
      }
    case RECEIVE_ARTIST:
      return action.payload.songs;
    case RECEIVE_ALBUM:
      return action.payload.songs;
    case RECEIVE_USER:
      if (typeof action.payload.song === 'undefined' || !action.payload.song) return state;
      return Object.assign({}, state, { [action.payload.song.id]: action.payload.song })
    case REMOVE_SONG:
      let newState = Object.assign({}, state);
      delete newState[action.payload.song.id];
      return newState;
    default:
      return state;
  }
};

export default songsReducer;