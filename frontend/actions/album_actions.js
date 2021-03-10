import * as AlbumAPIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

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