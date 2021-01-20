import React from 'react'
import SessionForm from './session_form'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    formType: 'signup',
    user: {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        birthday: "",
        gender: "",
        country: ""
    },
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SessionForm)