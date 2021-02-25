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

export const fetchPlaylistSongs = id => {
  return $.ajax({
    method: "GET",
    url: `/api/playlists/${id}/songs`,
  })
};