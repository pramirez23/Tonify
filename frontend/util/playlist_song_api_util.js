export const addSongToPlaylist = playlistSong => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists_songs',
    data: { playlistSong }
  });
};

export const removeSongFromPlaylist = playlistSongId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists_songs/${playlistSongId}`,
  })
};