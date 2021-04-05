pageQueue = {}
page_queue_ids = @songs.pluck(:id)

page_queue_ids.each_with_index do |id, idx|
  pageQueue[idx] = id
end

json.pageQueue(pageQueue)

json.album do
  json.partial! 'api/albums/album', album: @album
end

json.songs do
  @album.songs.each do |song|
    json.set! song.id do
      json.partial! song
    end
  end
end
