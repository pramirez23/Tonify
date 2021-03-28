json.extract! user, :id, :username

json.likes({playlists: {}, artists: {}, albums: {}, songs: {}})
json.likes do
  user.likes.each do |like|
    case like.likable_type
    when "Playlist"
      json.playlists do
        json.set! like.likable_id, true
      end

    when "Artist"
      json.artists do 
        json.set! like.likable_id, true
      end

    when "Album"
      json.albums do 
        json.set! like.likable_id, true
      end

    when "Song"
      json.songs do 
        json.set! like.likable_id do
          json.id like.likable_id
          json.created_at like.created_at
        end
      end
    end
  end
end