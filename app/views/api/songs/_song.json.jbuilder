json.extract! song, :title, :track_num, :duration
json.album_id song.album_id
json.album song.album.title
json.artist_id song.album.artist.id
json.artist song.album.artist.name
json.audio_file url_for(song.audio_file) if song.audio_file.attached?
json.cover_art url_for(song.album.cover_art)