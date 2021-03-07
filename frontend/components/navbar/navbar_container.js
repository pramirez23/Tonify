import { connect } from "react-redux";
import Navbar from "./navbar"
import { logout } from '../../actions/session_actions';

const mSTP = state => {
  const currentUserId = state.session.id;
  const { users } = state.entities;
  const currentUsername = users[currentUserId].username;

  return ({
    currentUsername
  });
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mSTP, mDTP)(Navbar);