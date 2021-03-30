import { 
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_SEARCH_PAGE
} from "../../actions/search_actions";

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_PAGE:
      return false;
    case RECEIVE_SEARCH_RESULTS:
      return true;
    default:
      return state;
  }
};