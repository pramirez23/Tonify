class Api::PlaylistSongsController < ApplicationController
  before_action :ensure_logged_in

  def create
    playlist_id = playlist_song_params[:playlist_id]
    song_id = playlist_song_params[:song_id]

    @playlist_song = PlaylistSong.new({
      playlist_id: playlist_id,
      song_id: song_id
    })
      
    @playlist = Playlist.find_by(id: playlist_song_params[:current_playlist_id])

    if @playlist_song.save
      render 'api/playlists/show'
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(playlist_song_params)
    @playlist = Playlist.find_by(id: @playlist_song[:playlist_id])

    if @playlist_song
      @playlist_song.destroy!
      render 'api/playlists/show'
    else
      render json: ['Song not found'], status: 404
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:id, :playlist_id, :song_id, :current_playlist_id)
  end
end
