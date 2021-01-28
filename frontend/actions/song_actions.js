import * as SongAPIUtil from '../util/track_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";

export const recieveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs
})

export const fetchSongs = () => dispatch => {
  return SongAPIUtil.fetchSongs()
    .then(
      songs => dispatch(receiveSongs(songs))
    )
};