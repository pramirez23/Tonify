json.extract! playlist, :id, :user_id, :name, :private, :description
# json.photo_url url_for(playlist.photo)
# json.songs playlist.songs.pluck(:id)
json.creator playlist.user.username