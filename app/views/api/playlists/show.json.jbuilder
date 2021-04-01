json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

pageQueue = []

json.pageQueue @songs.pluck(:song_id)

@playlist.songs.each do |song|
  json.songs do
    song.playlist_songs.each do |playlist_song|
        next if @playlist.id != playlist_song.playlist_id
        pageQueue.push(playlist_song)
        json.set! playlist_song.id do
          json.partial! song
          json.created_at playlist_song.created_at
        end
    end
  end
end