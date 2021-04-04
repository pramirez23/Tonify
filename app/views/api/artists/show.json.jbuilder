playlists = @artist.playlists.uniq

json.artist do
  images = []
  
  json.partial! 'api/artists/artist', artist: @artist
  
  @artist.photos.each do |photo|
    images << url_for(photo)
  end
  
  json.photos images
end

@artist.songs.slice(0, 5).each do |song|
  json.songs do
    json.set! song.id do
      json.partial! song
    end
  end
end

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.partial! album
    end
  end
end

json.playlists do
  playlists.slice(0, 5).each do |playlist|
    json.set! playlist.id do
      json.partial! playlist
    end
  end
end

json.pageQueue @artist.songs.slice(0, 5).pluck(:id)