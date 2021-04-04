export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
import * as UserAPIUtil from "../util/user_util"

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = payload => {
  return {
    type: RECEIVE_USER,
    payload
  }
}

export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id)
    .then(payload => dispatch(receiveUser(payload)))
}