import { combineReducers } from 'redux';
import modal from './modal_reducer';
import alert from './alert_reducer';
export default combineReducers({
  modal,
  alert
});