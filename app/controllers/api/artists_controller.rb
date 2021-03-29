class Api::ArtistsController < ApplicationController
  def show
    @artist = Artist.includes(:playlists).find(params[:id])
    render :show
  end
end
