class Api::PlaylistSongsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @playlist_song = Playlist.new(playlist_song_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      render json: ['Added to playlist']
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    
    if @playlist_song
      if @playlist_song.playlist_id == current_user.id
        @playlist_song.destroy!
        render json: ['Successfully removed'], status: 200
      else
        render json: ['You are not authorized to do this.'], status: 401
      end
    else
      render json: ['Song not found'], status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
