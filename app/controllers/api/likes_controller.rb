class Api::LikesController < ApplicationController
  def create
    create_like_params = like_params
    create_like_params[:user_id] = current_user.id

    @like = Like.new(create_like_params)

    if @like.save
      @user = User.find_by(id: current_user.id)
      render 'api/users/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    destroy_like_params = like_params
    destroy_like_params[:user_id] = current_user.id

    @like = Like.find_by(destroy_like_params)

    if @like
      @like.destroy!
      @user = User.find_by(id: current_user.id)
      render 'api/users/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def fetch_liked_playlists
    @user = User.find_by(id: current_user.id)
    @liked_playlists = @user.likes.where(likable_type: "Playlist")
  end

  def fetch_liked_artists
    @user = User.find_by(id: current_user.id)
    @liked_artists = @user.likes.where(likable_type: "Artist")
  end

  def fetch_liked_albums
    @user = User.find_by(id: current_user.id)
    @liked_albums = @user.likes.where(likable_type: "Album")
  end

  def fetch_liked_songs
    @user = User.find_by(id: current_user.id)
    @liked_songs = @user.likes.where(likable_type: "Song")
  end

  private

  def like_params
    params.require(:like).permit(:likable_id, :likable_type)
  end
end
