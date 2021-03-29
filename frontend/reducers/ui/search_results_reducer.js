import {
  RECEIVE_PLAYLIST_RESULTS,
  RECEIVE_ARTIST_RESULTS,
  RECEIVE_ALBUM_RESULTS,
  RECEIVE_SONG_RESULTS,
  RECEIVE_SEARCH_PAGE } from "../../actions/search_actions";

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_PAGE:
      return false;
    case RECEIVE_PLAYLIST_RESULTS:
      return true;
    case RECEIVE_ARTIST_RESULTS:
      return true;
    case RECEIVE_ALBUM_RESULTS:
      return true;
    case RECEIVE_SONG_RESULTS:
      return true;
    default:
      return state;
  }
};