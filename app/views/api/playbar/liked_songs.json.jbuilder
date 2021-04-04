if @song.length > 0
  json.pageQueue @pageQueue
  json.itemLocation(@item_location)
  json.song do
    json.partial! @song[0]
  end
end