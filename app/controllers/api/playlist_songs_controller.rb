class Api::PlaylistSongsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)

    if @playlist_song.save
      render json: ['Added to playlist']
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(playlist_song_params)

    if @playlist_song
      @playlist_song.destroy!
      render json: ['Successfully removed'], status: 200
    else
      render json: ['Song not found'], status: 404
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end
end
