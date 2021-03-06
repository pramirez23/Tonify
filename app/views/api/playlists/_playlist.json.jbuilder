json.extract! playlist, :id, :user_id, :name, :private, :description
json.photo_url url_for(playlist.photo) if playlist.photo.attached?
json.creator playlist.user.username
json.itemLocation(("/playlists/" + playlist.id.to_s))
