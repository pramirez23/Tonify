export const addSongToPlaylist = playlist_song => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists_songs',
    data: { playlist_song }
  });
};

export const removeSongFromPlaylist = (playlistId, songId) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/playlists_songs/remove',
    data: {
      playlist_id: playlistId,
      song_id: songId
     }
  })
};