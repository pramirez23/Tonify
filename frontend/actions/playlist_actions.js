import * as PlaylistAPIUtil from '../util/playlist_api_util';
import * as PlaylistSongAPIUtil from '../util/playlist_song_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const RECEIVE_PLAYLIST_ERRORS = "RECEIVE_PLAYLIST_ERRORS";
export const CLEAR_PLAYLIST_ERRORS = "CLEAR_PLAYLIST_ERRORS";

export const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  }
};

export const receivePlaylist = payload => {
  return {
    type: RECEIVE_PLAYLIST,
    payload
  }
};

export const removePlaylist = id => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId: id
  }
};

export const receivePlaylistErrors = errors => {
  return {
    type: RECEIVE_PLAYLIST_ERRORS,
    errors
  }
};

export const clearPlaylistErrors = () => {
  return {
    type: CLEAR_PLAYLIST_ERRORS
  }
};

export const fetchPlaylists = () => dispatch => {
  return PlaylistAPIUtil.fetchPlaylists()
    .then(
      playlists => dispatch(receivePlaylists(playlists))
    )
};

export const fetchPlaylist = id => dispatch => {
  return PlaylistAPIUtil.fetchPlaylist(id)
    .then( 
      playlist => dispatch(receivePlaylist(playlist))
    )
};

export const createPlaylist = playlist => dispatch => {
  return PlaylistAPIUtil.createPlaylist(playlist)
    .then(
      playlist => dispatch(receivePlaylist(playlist)),
      err => dispatch(receivePlaylistErrors(err.responseJSON))
    )
};

export const updatePlaylist = (playlist, playlistId) => dispatch => {
  return PlaylistAPIUtil.updatePlaylist(playlist, playlistId)
    .then(
      playlist => dispatch(receivePlaylist(playlist)),
      err => dispatch(receivePlaylistErrors(err.responseJSON))
    )
};

export const deletePlaylist = id => dispatch => {
  return PlaylistAPIUtil.deletePlaylist(id)
    .then(() => dispatch(removePlaylist(id)))
};

export const addSongToPlaylist = (playlistId, songId, currentPlaylistId) => dispatch => {
  return PlaylistSongAPIUtil.addSongToPlaylist(playlistId, songId, currentPlaylistId)
    .then(
      playlist => dispatch(receivePlaylist(playlist)),
      err => dispatch(receivePlaylistErrors(err.responseJSON))
    )
};

export const removeSongFromPlaylist = (playlistSongId) => dispatch => {
  return PlaylistSongAPIUtil.removeSongFromPlaylist(playlistSongId)
    .then(
      playlist => dispatch(receivePlaylist(playlist)),
      err => dispatch(receivePlaylistErrors(err.responseJSON))
    )
};