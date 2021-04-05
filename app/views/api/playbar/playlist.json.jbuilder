json.itemLocation(@item_location)

if @songs.length > 0
  pageQueue = {}
  page_queue_ids = @songs.pluck(:song_id)

  page_queue_ids.each_with_index do |id, idx|
    pageQueue[idx] = id
  end

  json.pageQueue(pageQueue)

  firstSong = @songs.first.song_id
  json.song do
     json.partial! @playlist.songs.uniq.select{ |song| song.id === firstSong}[0]
  end
end