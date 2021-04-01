class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.includes(:songs).find(params[:id])
    @songs = @album.songs.where(album_id: params[:id]).order(:track_num)
    render :show
  end
end
