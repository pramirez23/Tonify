import { RECEIVE_USER } from "../../actions/user_actions";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case RECEIVE_USER:
    //   return Object.assign({}, state, action.payload.user.likes)
    default:
      return state;
  }
};

export default likesReducer;