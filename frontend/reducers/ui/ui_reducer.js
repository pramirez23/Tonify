import { combineReducers } from 'redux';
import modal from './modal_reducer';
import alert from './alert_reducer';
import loading from './loading_reducer';
import searchResults from './search_results_reducer';

export default combineReducers({
  modal,
  alert,
  loading,
  searchResults
});