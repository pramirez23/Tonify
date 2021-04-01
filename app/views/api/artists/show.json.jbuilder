playlists = @artist.playlists.uniq
pageQueue = []

json.artist do
  images = []
  
  json.partial! 'api/artists/artist', artist: @artist
  
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
    pageQueue.push(artist_songs[i].id)
    
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
  playlists.slice(0, 5).each do |playlist|
    json.set! playlist.id do
      json.partial! playlist
    end
  end
end

pageQueue = pageQueue.sort
json.pageQueue pageQueue