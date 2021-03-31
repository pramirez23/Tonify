import { RECEIVE_HOME } from "../../actions/home_actions";
import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";

const pagePlaylistsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_HOME:
      return action.payload.playlistIds;
    case RECEIVE_SEARCH_RESULTS:
      return action.payload.playlistIds;
    default:
      return state;
  }
}

export default pagePlaylistsReducer;