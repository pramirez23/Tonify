export const fetchSongs = () => {
  return $.ajax({
    method: "GET",
    url: "api/songs",
  })
};

export const fetchSong = id => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${id}`,
  })
};

export const fetchPlaylistSongs = playlistId => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/playlists/${playlistId}/songs`,
  })
};