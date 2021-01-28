json.song do
    json.extract! song, :title, :album_id, :track_num, :duration
    json.album song.album
    json.artist song.album.artist.name
    json.artistId song.artist.id
    json.audio_file url_for(song.audio_file) if song.audio_file.attached?
    json.cover_art url_for(song.album.cover_art)
end