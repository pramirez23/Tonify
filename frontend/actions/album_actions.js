import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_PLAYLIST_ERRORS";


export const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  }
};

export const receiveAlbum = payload => {
  return {
    type: RECEIVE_ALBUM,
    payload
  }
};

export const receiveAlbumErrors = errors => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  }
};

export const fetchAlbums = () => dispatch => {
  return AlbumAPIUtil.fetchAlbums()
    .then(
      albums => dispatch(receiveAlbums(albums))
    )
};

export const fetchAlbum = id => dispatch => {
  return AlbumAPIUtil.fetchAlbum(id)
    .then(
      album => dispatch(receiveAlbum(album))
    )
};

export const addAlbumToPlaylist = (playlistId, albumId) => dispatch => {
  return AlbumAPIUtil.addAlbumToPlaylist(playlistId, albumId)
    .then(
      album => dispatch(receiveAlbum(album)),
      err => dispatch(receiveAlbumErrors(err.responseJSON))
    )
};

export const addAlbumSongToPlaylist = (playlistId, songId, albumId) => dispatch => {
  return AlbumAPIUtil.addAlbumSongToPlaylist(playlistId, songId, albumId)
    .then(
      album => dispatch(receiveAlbum(album)),
      err => dispatch(receiveAlbumErrors(err.responseJSON))
    )
};