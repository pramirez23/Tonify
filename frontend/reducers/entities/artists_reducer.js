import { RECEIVE_ARTIST } from "../../actions/artist_actions";
import { RECEIVE_LIKED_ARTISTS } from "../../actions/library_actions";
import { RECEIVE_GENRE } from "../../actions/genre_actions";
import { RECEIVE_HOME } from "../../actions/home_actions";

const artistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_HOME:
      return action.payload.artists
    case RECEIVE_ARTIST:
      return Object.assign({}, state, { [action.payload.artist.id]: action.payload.artist })
    case RECEIVE_LIKED_ARTISTS:
      return action.likedArtists;
    case RECEIVE_GENRE:
      return action.payload.artists;
    default:
      return state;
  }
};

export default artistsReducer;