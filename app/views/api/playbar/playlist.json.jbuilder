json.itemLocation(@item_location)

if @songs.length > 0
  json.pageQueue @songs.pluck(:song_id)
  firstSong = @songs.first.song_id
  json.song do
     json.partial! @playlist.songs.uniq.select{ |song| song.id === firstSong}[0]
  end
end