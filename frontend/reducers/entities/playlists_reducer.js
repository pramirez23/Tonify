import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST,
} from "../../actions/playlist_actions";

import { RECEIVE_LIKED_PLAYLISTS } from "../../actions/library_actions";

const playlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case RECEIVE_LIKED_PLAYLISTS:
      return Object.assign({}, state, action.likedPlaylists);
    case RECEIVE_PLAYLIST:
      if (typeof action.payload === 'undefined' || !action.payload.playlist) return state;
      return Object.assign({}, state, { [action.payload.playlist.id]: action.payload.playlist })
    case REMOVE_PLAYLIST:
      let newState = Object.assign({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playlistsReducer;