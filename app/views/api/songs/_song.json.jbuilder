json.song do
    json.extract! song, :title, :album_id, :track_num, :duration
    json.audio_file url_for(song.audio_file)
end