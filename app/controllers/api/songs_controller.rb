class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    if @song
      render :show
    else
      render json: ['Song not found'], status: 422
    end
  end

  def index
    @songs = Song.joins(:playlists).where(playlists: {id: params[:playlist_id]})
    render :index
  end 
end
