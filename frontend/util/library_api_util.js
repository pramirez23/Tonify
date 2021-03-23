export const fetchLikedPlaylists = (currentUserId) => {
  return $.ajax({
    type: "GET",
    url: `/api/users/${currentUserId}/playlists`
  })
}

export const fetchLikedArtists = (currentUserId) => {
  return $.ajax({
    type: "GET",
    url: `api/users/${currentUserId}/artists`
  })
}

export const fetchLikedAlbums = (currentUserId) => {
  return $.ajax({
    type: "GET",
    url: `/api/users/${currentUserId}/albums`
  })
}

export const fetchLikedSongs = (currentUserId) => {
  return $.ajax({
    type: "GET",
    url: `/api/users/${currentUserId}/songs`
  })
}

export const fetchLikedSongsPreview = (currentUserId) => {
  return $.ajax({
    type: "GET",
    url: `/api/users/${currentUserId}/songs_preview`
  })
}

export const like = (likable_id, likable_type) => {
  return $.ajax({
    type: "POST",
    url: "api/likes",
    data: {
      like: {
        likable_id,
        likable_type
      }
    }
  })
}

export const unlike = (likable_id, likable_type) => {
  return $.ajax({
    type: "DELETE",
    url: "api/likes/-1",
    data: {
      like: {
        likable_id,
        likable_type
      }
    }
  })
}

export const unlikeSongFromLibrary = (likable_id, likable_type) => {
  return $.ajax({
    type: "DELETE",
    url: "api/likes/-1",
    data: {
      like: {
        likable_id,
        likable_type,
        from_library: true
      }
    }
  })
}