export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
import * as UserAPIUtil from "../util/user_util"

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}
const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}
export const fetchUsers = () => dispatch => {
  return UserAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
}

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
}