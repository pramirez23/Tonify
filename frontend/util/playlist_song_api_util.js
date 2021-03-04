export const addSongToPlaylist = (playlist_id, song_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlist_songs',
    data: {
      playlist_song: {
        playlist_id,
        song_id,
      }
    }
  });
};

export const removeSongFromPlaylist = (playlist_id, song_id) => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/playlist_songs/-1',
    data: {
      playlist_song: {
        playlist_id,
        song_id,
      }
    }
  })
};