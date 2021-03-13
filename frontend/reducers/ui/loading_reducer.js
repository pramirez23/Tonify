// import {
//   RECEIVE_PLAYLISTS,
//   RECEIVE_PLAYLIST,
// } from "../../actions/playlist_actions";

// import {
//   RECEIVE_ALBUMS,
//   RECEIVE_ALBUM,
// } from "../../actions/album_actions";

import { LOADING } from "../../actions/loading_actions";

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    // case RECEIVE_PLAYLIST:
    //   return false;
    // case RECEIVE_PLAYLISTS:
    //   return false;
    // case RECEIVE_ALBUM:
    //   return false;
    // case RECEIVE_ALBUMS:
    //   return false;
    case LOADING:
      return true;
    default:
      return false;
  }
};