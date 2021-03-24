import { RECEIVE_ARTIST } from "../../actions/artist_actions";
import { RECEIVE_LIKED_ARTISTS } from "../../actions/library_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.payload.artist.id]: action.payload.artist })
    case RECEIVE_LIKED_ARTISTS:
      return action.likedArtists;
    default:
      return state;
  }
};

export default artistsReducer;