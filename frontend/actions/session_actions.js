import * as SessionAPIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};

export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user)
    .then(
      user => { dispatch(receiveCurrentUser(user)) },
      err => { dispatch(receiveErrors(err.responseJSON)) }
    ) 
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user)
    .then(
      user => { dispatch(receiveCurrentUser(user)) },
      err => { dispatch(receiveErrors(err.responseJSON)) }
    )
};

export const loginDemo = demoUser => dispatch => {
  return SessionAPIUtil.login(demoUser)
    .then( demoUser => { dispatch(receiveCurrentUser(demoUser)) } )
};

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => { dispatch(logoutCurrentUser()) } )
);