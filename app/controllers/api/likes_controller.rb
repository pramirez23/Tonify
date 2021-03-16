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
    @likes = @user.likes.where(likable_type: "Playlist").pluck(:likable_id)
    @playlists = Playlist.where(id: @likes)
    render 'api/playlists/index'
  end

  def fetch_liked_artists
    @user = User.find_by(id: current_user.id)
    @likes = @user.likes.where(likable_type: "Artist").pluck(:likable_id)
    @artists = Artist.where(id: @likes)
    render 'api/artists/index'
  end

  def fetch_liked_albums
    @user = User.find_by(id: current_user.id)
    @likes = @user.likes.where(likable_type: "Album").pluck(:likable_id)
    @album = Album.where(id: @likes)
    render 'api/albums/index'
  end

  def fetch_liked_songs
    @user = User.find_by(id: current_user.id)
    @likes = @user.likes.where(likable_type: "Song").pluck(:likable_id)
    @songs = Song.where(id: @likes)
    render 'api/songs/index'
  end

  private

  def like_params
    params.require(:like).permit(:likable_id, :likable_type)
  end
end
