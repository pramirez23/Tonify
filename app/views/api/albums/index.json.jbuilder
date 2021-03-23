@albums.each do |album|
    json.set! album.id do
        json.partial! 'api/albums/album', album: album
        json.created_at @likes[album.id]
    end
end