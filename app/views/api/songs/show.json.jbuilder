json.song do
  json.partial! 'api/songs/song', song: @song
end
# json.song_url song.url_for(audio_file)
json.user do
  json.partial! 'api/users/user', user: @user
end