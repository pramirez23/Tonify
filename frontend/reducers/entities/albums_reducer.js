import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
} from "../../actions/album_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.playlists;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.payload.album.id]: action.payload.album })
    default:
      return state;
  }
};

export default albumsReducer;