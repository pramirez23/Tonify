import { RECEIVE_SEARCH_RESULTS } from "../../actions/search_actions";

const searchQueriesReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.payload.searchQuery;
    default:
      return state;
  }
}

export default searchQueriesReducer;