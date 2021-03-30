import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_PAGE = "RECEIVE_SEARCH_PAGE";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchPage = () => ({
  type: RECEIVE_SEARCH_PAGE
});

export const receiveSearchResults = payload => {
  return { 
    type: RECEIVE_SEARCH_RESULTS,
    payload
  }
}

export const fetchSearchResults = query => dispatch => {
  return SearchAPIUtil.fetchSearchResults(query)
    .then(
      payload => dispatch(receiveSearchResults(payload))
    )
}