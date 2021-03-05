json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

@playlist.songs.each do |song|
  json.songs do
    song.playlist_songs.each do |playlist_song|
        next if @playlist.id != playlist_song.playlist_id
        json.set! playlist_song.id do
          json.partial! song
          json.created_at playlist_song.created_at
        end
    end
    # json.set! song.id do
    #   json.partial! song
    #   song.playlist_songs.each do |playlist_song|
    #     next if @playlist.id != playlist_song.playlist_id
    #     json.created_at playlist_song.created_at
    #   end
    # end
  end
end

