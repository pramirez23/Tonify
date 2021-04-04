json.extract! artist, :id, :name, :bio
playlists = artist.playlists.uniq
json.playlist_ids playlists.slice(0, 5).pluck(:id)
json.itemLocation(("/artists/" + artist.id.to_s))