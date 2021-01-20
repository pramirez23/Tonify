import Signup from './signup'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'

const mDTP = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
});

export default connect(null, mDTP)(Signup)