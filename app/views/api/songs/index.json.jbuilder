pageQueue = {}
page_queue_ids = @pageQueue

page_queue_ids.each_with_index do |id, idx|
  pageQueue[idx] = id
end

json.pageQueue(pageQueue)

@songs.each do |song|
  json.likedSongs do
    json.set! song.id do
        json.partial! 'api/songs/song', song: song
        json.created_at @likes[song.id]
    end
  end
end