import * as PlaylistSongAPIUtil from '../util/playlist_song_api_util';
import { removeSong, addSong } from './playlist_actions';

export const addSongToPlaylist = (playlistId, song) => dispatch => {
  return PlaylistSongAPIUtil.addSongToPlaylist(playlistId, song.id)
    .then(() => dispatch(addSong(song)));
}

export const removeSongFromPlaylist = (playlistId, songId) => dispatch => {
  return PlaylistSongAPIUtil.removeSongFromPlaylist(playlistId, songId)
    .then(() => dispatch(removeSong(songId)));
}