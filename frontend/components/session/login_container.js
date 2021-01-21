import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Login from './login';

const mSTP = (state) => {
  return {
    formType: 'login',
    errors: state.errors.session
  };
};

const mDTP = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(Login);
