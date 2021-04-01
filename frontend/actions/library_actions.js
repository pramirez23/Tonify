import * as LibraryAPIUtil from '../util/library_api_util';
import { receiveUser } from './user_actions'

export const RECEIVE_LIKED_PLAYLISTS = "RECEIVE_LIKED_PLAYLISTS";
export const RECEIVE_LIKED_ARTISTS = "RECEIVE_LIKED_ARTISTS";
export const RECEIVE_LIKED_ALBUMS = "RECEIVE_LIKED_ALBUMS";
export const RECEIVE_LIKED_SONGS = "RECEIVE_LIKED_SONGS";
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveLikedPlaylists = likedPlaylists => {
  return {
    type: RECEIVE_LIKED_PLAYLISTS,
    likedPlaylists
  }
};

export const receiveLikedArtists = likedArtists => {
  return {
    type: RECEIVE_LIKED_ARTISTS,
    likedArtists
  }
};

export const receiveLikedAlbums = likedAlbums => {
  return {
    type: RECEIVE_LIKED_ALBUMS,
    likedAlbums
  }
};

export const receiveLikedSongs = payload => {
  return {
    type: RECEIVE_LIKED_SONGS,
    payload
  }
};

export const removeSong = payload => {
  return {
    type: REMOVE_SONG,
    payload
  }
};

export const fetchLikedPlaylists = (currentUserId) => dispatch => {
  return LibraryAPIUtil.fetchLikedPlaylists(currentUserId)
    .then(
      likedPlaylists => dispatch(receiveLikedPlaylists(likedPlaylists))
    )
}

export const fetchLikedArtists = (currentUserId) => dispatch => {
  return LibraryAPIUtil.fetchLikedArtists(currentUserId)
    .then(
      likedArtists => dispatch(receiveLikedArtists(likedArtists))
    )
}

export const fetchLikedAlbums = (currentUserId) => dispatch => {
  return LibraryAPIUtil.fetchLikedAlbums(currentUserId)
    .then(
      likedAlbums => dispatch(receiveLikedAlbums(likedAlbums))
    )
}

export const fetchLikedSongs = (currentUserId) => dispatch => {
  return LibraryAPIUtil.fetchLikedSongs(currentUserId)
    .then(
      likedSongs => dispatch(receiveLikedSongs(likedSongs))
    )
}

export const fetchLikedSongsPreview = (currentUserId) => dispatch => {
  return LibraryAPIUtil.fetchLikedSongsPreview(currentUserId)
    .then(
      likedSongs=> dispatch(receiveLikedSongs(likedSongs))
    )
}

export const like = (likableType, likableId) => dispatch => {
  return LibraryAPIUtil.like(likableType, likableId)
    .then(
        user => dispatch(receiveUser(user))
      )
}

export const unlike = (likableType, likableId) => dispatch => {
  return LibraryAPIUtil.unlike(likableType, likableId)
    .then(
        user => dispatch(receiveUser(user))
      )
}

export const unlikeSongFromLibrary = (likableType, likableId) => dispatch => {
  return LibraryAPIUtil.unlikeSongFromLibrary(likableType, likableId)
    .then(
        payload => dispatch(removeSong(payload))
      )
}

