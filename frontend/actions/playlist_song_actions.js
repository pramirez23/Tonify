import * as PlaylistSongAPIUtil from '../util/playlist_song_api_util';
import { removeSong } from './playlist_actions';

export const addSongToPlaylist = (playlistId, songId) => dispatch => {
  return PlaylistSongAPIUtil.addSongToPlaylist(playlistId, songId)
    .then(() => dispatch(removeSong(songId)));
}

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => {
  return PlaylistSongAPIUtil.removeSongFromPlaylist(playlistId, songId)
    .then(() => dispatch(removeSong(songId)));
}