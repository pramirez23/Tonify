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

export const like = (likeable_id, likeable_type) => {
  return $.ajax({
    type: "POST",
    url: "api/likes",
    data: {
      like: {
        likeable_id,
        likeable_type
      }
    }
  })
}

export const unlike = (likeable_id, likeable_type) => {
  return $.ajax({
    type: "DELETE",
    url: "api/likes/-1",
    data: {
      like: {
        likeable_id,
        likeable_type
      }
    }
  })
}