if @songs.length > 0
  json.pageQueue(@pageQueue)
  json.itemLocation(@item_location)
  json.song do
    json.partial! @songs.first
  end
end