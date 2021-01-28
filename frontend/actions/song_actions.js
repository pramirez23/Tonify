import * as SongAPIUtil from '../util/song_api_util';

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  }
};

export const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  }
};

export const fetchSongs = () => dispatch => {
  return SongAPIUtil.fetchSongs()
    .then(
      songs => dispatch(receiveSongs(songs))
    )
};

export const fetchSong = id => dispatch => {
  return SongAPIUtil.fetchSong(id)
    .then(
      song => dispatch(receiveSong(song))
    )
};

export const fetchPlaylistSongs = playlistId => dispatch => {
  return SongAPIUtil.fetchPlaylistSongs(playlistId)
    .then(
      songs => {
        dispatch(receiveSongs(songs))
      } 
    )
}