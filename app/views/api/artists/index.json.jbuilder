@artists.each do |artist|
    json.set! artist.id do
        images = []
        json.partial! 'api/artists/artist', artist: artist
        
        artist.photos.each do |photo|
          images << url_for(photo)
        end

        json.photos images
        json.created_at @likes[artist.id]
    end
end