import * as GenreAPIUtil from '../util/genre_api_util'

export const RECEIVE_GENRE = "RECEIVE_GENRE";

export const receiveGenre = payload => {
  return {
    type: RECEIVE_GENRE,
    payload
  }
}

export const fetchHipHop = () => dispatch => {
  return GenreAPIUtil.fetchHipHop()
    .then(
      genre => dispatch(receiveGenre(genre))
    )
}

export const fetchPop = () => dispatch => {
  return GenreAPIUtil.fetchPop()
    .then(
      genre => dispatch(receiveGenre(genre))
    )
}

export const fetchRock = () => dispatch => {
  return GenreAPIUtil.fetchRock()
    .then(
      genre => dispatch(receiveGenre(genre))
    )
}

export const fetchRnb = () => dispatch => {
  return GenreAPIUtil.fetchRnb()
    .then(
      genre => dispatch(receiveGenre(genre))
    )
}