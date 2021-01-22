import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Splash from './splash';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  }
};

export default connect(mSTP, mDTP)(Splash);
