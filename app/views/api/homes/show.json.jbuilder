json.playlistIds([])
json.playlistIds @playlists.pluck(:id)

json.playlists({})
json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! playlist
    end
  end
end

json.artists({})
json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.partial! artist
      json.photos [url_for(artist.photos[0])]
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
