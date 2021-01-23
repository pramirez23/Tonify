import Signup from './signup'
import { connect } from 'react-redux'
import { signup, login, clearErrors } from '../../actions/session_actions'

const mSTP = (state) => {
  return {
    formType: 'signup',
    errors: state.errors.session
  };
};

const mDTP = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Signup)