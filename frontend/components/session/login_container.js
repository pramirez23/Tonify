import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mSTP = ({ errors }) => {
  return {
    formType: 'login',
    errors: errors.session,           
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(Login);
