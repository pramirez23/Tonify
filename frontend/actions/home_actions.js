import * as HomeAPIUtil from '../util/home_api_util'

export const RECEIVE_HOME = "RECEIVE_HOME";

export const receiveHome = payload => {
  return {
    type: RECEIVE_HOME,
    payload
  }
}

export const fetchHome = () => dispatch => {
  return HomeAPIUtil.fetchHome()
    .then(
      home => dispatch(receiveHome(home))
    )
}