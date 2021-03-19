class Api::PlaylistsController < ApplicationController
  before_action :ensure_logged_in
  
  def index
    @playlists = current_user.playlists
    render :index
  end
  
  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id

    if @playlist.save
      Like.create!(likable_id: @playlist.id, likable_type: "Playlist", user_id: current_user.id)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def update
    @playlist = current_user.playlists.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    playlist = Playlist.find(params[:id])

    if playlist
      playlist.destroy
    else
      render json: @playlist.errors.full_messages, status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :description, :private, :photo)
  end
end
