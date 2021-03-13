class Api::LikesController < ApplicationController
  def create
    create_like_params = like_params
    create_like_params[:user_id] = current_user.id

    @like = Like.new(create_like_params)

    if @like.save
      @user = User.find_by(id: current_user.id)
      render 'api/user/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    
  end

  def fetch_liked_playlists
    @user = User.find_by(id: current_user.id)
    @liked_playlists = @user.likes.where(likeable_type: "Playlist")
  end

  def fetch_liked_artists
    @user = User.find_by(id: current_user.id)
    @liked_artists = @user.likes.where(likeable_type: "Artist")
  end

  def fetch_liked_albums
    @user = User.find_by(id: current_user.id)
    @liked_albums = @user.likes.where(likeable_type: "Album")
  end

  def fetch_liked_songs
    @user = User.find_by(id: current_user.id)
    @liked_songs = @user.likes.where(likeable_type: "Song")
  end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end
end
