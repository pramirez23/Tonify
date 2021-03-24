playlists = @artist.playlists.shuffle.uniq

json.artist do
  json.partial! 'api/artists/artist', artist: @artist
  json.playlist_ids playlists.slice(0, 5).pluck(:id)
end

images = []

@artist.photos.each do |photo|
  images << url_for(photo)
end

json.photos images

json.songs do
  i = 0
  artist_songs = @artist.songs.shuffle
  while i < 5 
    json.set! artist_songs[i].id do
      json.partial! artist_songs[i]
    end

    i += 1
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
  i = 0
  
  while i < 5
    json.set! playlists[i].id do
      json.partial! playlists[i]
    end

    i += 1
  end
end