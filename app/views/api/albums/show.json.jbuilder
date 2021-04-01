json.pageQueue @songs.pluck(:id)

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
