import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
} from "../../actions/album_actions";
import { RECEIVE_ARTIST } from "../../actions/artist_actions";
import { RECEIVE_LIKED_ALBUMS } from "../../actions/library_actions";

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      return action.payload.albums;
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.payload.album.id]: action.payload.album })
    case RECEIVE_LIKED_ALBUMS:
      return action.likedAlbums;
    default:
      return state;
  }
};

export default albumsReducer;