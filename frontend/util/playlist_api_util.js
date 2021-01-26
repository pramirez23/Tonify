export const fetchPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists',
  })
};

export const fetchPlaylist = id => {
  return $.ajax({
    method: "GET",
    url: `api/playlists/${id}`,
  })
};

export const createPlaylist = playlist => {
  return $.ajax({
    method: 'POST',
    url: '/api/playlists',
    data: { playlist }
  })
};

export const updatePlaylist = playlist => {
  return $.ajax({
    method: "PATCH",
    url: `api/playlists/${playlist.id}`,
    data: { playlist }
  })
};

export const deletePlaylist = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${id}`
  })
};

export const addSong = (playlistId, songId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/playlist_songs',
    data: {
      playlist_song: {
        playlist_id: playlistId,
        song_id: songId
      }
    }
  })
};

export const removeSong = playlistSongId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/playlist_songs/${playlistSongId}`,
    data: { playlistSongId }
  })
};