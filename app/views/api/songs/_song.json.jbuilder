json.extract! song, :title, :album_id, :track_num, :duration
json.audio_file url_for(song.audio_file) if song.audio_file.attached?
json.cover_art url_for(song.album.cover_art)