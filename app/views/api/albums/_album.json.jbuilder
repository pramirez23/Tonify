json.extract! album, :id, :title, :year, :artist_id, :genre, :duration, :single
json.cover_art url_for(album.cover_art)
json.artist album.artist.name