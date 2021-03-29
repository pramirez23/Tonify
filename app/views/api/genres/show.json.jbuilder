json.artists({})
json.artists do
  @albums.each do |album|
    json.set! album.artist.id do
      json.partial! album.artist
      json.photos [url_for(album.artist.photos[0])]
    end
  end
end

json.albums({})
json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.partial! album
    end
  end
end