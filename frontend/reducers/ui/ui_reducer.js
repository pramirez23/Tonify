import { combineReducers } from 'redux';
import modal from './modal_reducer';
import alert from './alert_reducer';
import loading from './loading_reducer';

export default combineReducers({
  modal,
  alert,
  loading
});