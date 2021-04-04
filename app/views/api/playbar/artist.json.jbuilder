pageQueue = []
artist_songs = @artist.songs.slice(0, 5)

json.pageQueue artist_songs.pluck(:id)

json.itemLocation(@item_location)

json.song do
  json.partial! artist_songs[0]
end