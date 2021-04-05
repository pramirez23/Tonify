json.playlist do
  json.partial! 'api/playlists/playlist', playlist: @playlist
end

if @songs
  pageQueue = {}
  page_queue_ids = @songs.pluck(:song_id)

  page_queue_ids.each_with_index do |id, idx|
    pageQueue[idx] = id
  end

  json.pageQueue(pageQueue)
else
  json.pageQueue({})
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
  end
end