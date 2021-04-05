if @song.length > 0
  pageQueue = {}

  @pageQueue.each_with_index do |id, idx|
    pageQueue[idx] = id
  end

  json.pageQueue(pageQueue)
  json.itemLocation(@item_location)
  json.song do
    json.partial! @song[0]
  end
else
  json.pageQueue({})
end