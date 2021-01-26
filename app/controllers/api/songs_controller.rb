class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    if @track
      render :show
    else
      render json: ['Song not found'], status: 422
  end
end
