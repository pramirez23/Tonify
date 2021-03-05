export const addSongToPlaylist = (playlist_id, song_id, current_playlist_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: {
      playlist_song: {
        playlist_id,
        song_id,
        current_playlist_id
      }
    }
  });
};

export const removeSongFromPlaylist = playlistSongId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlist_songs/${playlistSongId}`,
    data: {
      playlist_song: {
        id: playlistSongId
      }
    }
  })
};