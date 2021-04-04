json.pageQueue @songs.pluck(:id)
json.itemLocation(@item_location)
json.song do
   json.partial! @songs.first
end

