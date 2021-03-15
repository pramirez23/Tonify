import { OPEN_ALERT, CLOSE_ALERT } from "../../actions/alert_actions";

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_ALERT:
      return action.alert;
    case CLOSE_ALERT:
      return null;
    default:
      return state;
  }
};