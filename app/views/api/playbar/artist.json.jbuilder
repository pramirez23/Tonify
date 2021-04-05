pageQueue = {}
artist_songs = @artist.songs.slice(0, 5)
page_queue_ids = artist_songs.pluck(:id)

page_queue_ids.each_with_index do |id, idx|
  pageQueue[idx] = id
end

json.pageQueue(pageQueue)
json.itemLocation(@item_location)

json.song do
  json.partial! artist_songs[0]
end