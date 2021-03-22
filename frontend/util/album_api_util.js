export const fetchAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/albums',
  })
};

export const fetchAlbum = id => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`,
  })
};

export const addAlbumToPlaylist = (playlist_id, album_id) => {
  return $.ajax({
    method: "POST",
    url: `/api/playlists/${playlist_id}/album`,
    data: {
      playlist_song: {
        playlist_id,
        album_id
      }
    }
  })
}

export const addAlbumSongToPlaylist = (playlist_id, song_id, album_id) => {
  return $.ajax({
    method: "POST",
    url: `/api/playlists/${playlist_id}/album_song`,
    data: {
      playlist_song: {
        playlist_id,
        song_id,
        album_id
      }
    }
  })
}