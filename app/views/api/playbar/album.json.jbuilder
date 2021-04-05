pageQueue = {}
page_queue_ids = @songs.pluck(:id)

page_queue_ids.each_with_index do |id, idx|
  pageQueue[idx] = id
end

json.pageQueue(pageQueue)
json.itemLocation(@item_location)
json.song do
   json.partial! @songs.first
end

