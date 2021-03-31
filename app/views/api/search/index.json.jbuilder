json.playlistIds([])
json.playlists({})
json.artists({})
json.albums({})
json.songs({})

json.searchQuery @search_query
json.playlistIds @playlists.pluck(:id)

json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.partial! playlist
    end
  end
end

json.artists do
  @artists.each do |artist|
    json.set! artist.id do
      json.partial! artist
      json.photos [url_for(artist.photos[0])]
    end
  end
end

json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.partial! album
    end
  end
end

json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.partial! song
    end
  end

  if @artists.size == 1 && @songs.size == 0
    @artists.each do |artist|
      i = 0

      shuffle_length = 5
      artist_songs = artist.songs.shuffle
      shuffle_length = artist_songs.length if artist_songs.length < 5

      while i < shuffle_length
        json.set! artist_songs[i].id do
          json.partial! artist_songs[i]
        end

        i += 1
      end
    end
  end
end
