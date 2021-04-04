class Api::PlaybarController < ApplicationController
  def index
    case playbar_params[:itemType]
    when "Playlist"
      @playlist = Playlist.find_by(id: playbar_params[:itemId])
      @songs = PlaylistSong.where(playlist_id: playbar_params[:itemId]).order(:created_at)
      @item_location = playbar_params[:itemLocation]
      render '/api/playbar/playlist'
    when "Artist"
      @artist = Artist.find_by(id: playbar_params[:itemId])
      @item_location = playbar_params[:itemLocation]
      render '/api/playbar/artist'
    when "Album"
      @album = Album.find_by(id: playbar_params[:itemId])
      @songs = Album.find_by(id: playbar_params[:itemId])
                    .songs
                    .where(album_id: playbar_params[:itemId])
                    .order(:track_num)
      @item_location = playbar_params[:itemLocation]
      render '/api/playbar/album'
    when "Liked Songs"
      @user = User.find_by(id: current_user.id)
      @likes = @user.likes.where(likable_type: "Song").order(:created_at).pluck(:likable_id, :created_at).to_h
      @pageQueue = @likes.keys.reverse
      @song = Song.where(id: @pageQueue.first)
      @item_location = playbar_params[:itemLocation]
      render 'api/playbar/liked_songs'
    end
  end

  private
  
  def playbar_params
    params.require(:playbar).permit(:itemId, :itemType, :itemLocation)
  end
end