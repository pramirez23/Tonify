playlists = @artist.playlists.shuffle.uniq

json.artist do
  images = []
  
  json.partial! 'api/artists/artist', artist: @artist
  json.playlist_ids playlists.slice(0, 5).pluck(:id)

  @artist.photos.each do |photo|
    images << url_for(photo)
  end

  json.photos images
end


json.songs do
  i = 0

  shuffle_length = 5
  artist_songs = @artist.songs.shuffle
  shuffle_length = artist_songs.length if artist_songs.length < 5

  while i < shuffle_length
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

  shuffle_length = 5
  shuffle_length = playlists.length if playlists.length < 5

  while i < shuffle_length
    json.set! playlists[i].id do
      json.partial! playlists[i]
    end

    i += 1
  end
end