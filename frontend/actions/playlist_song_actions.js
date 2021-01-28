import * as PlaylistSongAPIUtil from '../util/playlist_song_api_util';
import { receivePlaylist } from './playlist_actions';

export const addSongToPlaylist = playlistSong => dispatch => {
  return PlaylistSongAPIUtil.addSongToPlaylist(playlistSong)
    .then(playlist => dispatch(receivePlaylist(playlist)));
}

export const removeSongFromPlaylist = (playlistSongId) => dispatch => {
  return PlaylistSongAPIUtil.removeSongFromPlaylist(playlistSongId)
    .then(playlist => dispatch(receivePlaylist(playlist)));
}