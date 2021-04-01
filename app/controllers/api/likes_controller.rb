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

    case destroy_like_params[:likable_type]
    when "Playlist"
      @like = Like.find_by(likable_id: destroy_like_params[:likable_id], likable_type: "Playlist")
      @playlist = Playlist.find_by(id: destroy_like_params[:likable_id])

      if @like
        @like.destroy!
        @user = User.find_by(id: current_user.id)
        render 'api/users/show'
      end
    when "Artist"
      @like = Like.find_by(likable_id: destroy_like_params[:likable_id], likable_type: "Artist")
      @artist = Artist.find_by(id: destroy_like_params[:likable_id])

      if @like
        @like.destroy!
        @user = User.find_by(id: current_user.id)
        render 'api/users/show'
      end
    when "Album"
      @like = Like.find_by(likable_id: destroy_like_params[:likable_id], likable_type: "Album")
      @album = Album.find_by(id: destroy_like_params[:likable_id])

      if @like
        @like.destroy!
        @user = User.find_by(id: current_user.id)
        render 'api/users/show'
      end
    when "Song"
      @like = Like.find_by(likable_id: destroy_like_params[:likable_id], likable_type: "Song")
      @song = Song.find_by(id: destroy_like_params[:likable_id])

      if @like
        @like.destroy!
        @user = User.find_by(id: current_user.id)
        if destroy_like_params[:from_library]
          render 'api/songs/show'
        else
          render 'api/users/show'
        end
      end
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
    @albums = Album.where(id: @likes)
    render 'api/albums/index'
  end

  def fetch_liked_songs
    @user = User.find_by(id: current_user.id)
    @likes = @user.likes.where(likable_type: "Song").order(:created_at).pluck(:likable_id, :created_at).to_h
    @songs = Song.where(id: @likes.keys)
    @pageQueue = @likes.keys.reverse
    render 'api/songs/index'
  end

  def fetch_liked_songs_preview
    @user = User.find_by(id: current_user.id)
    @likes = @user.likes.where(likable_type: "Song").pluck(:likable_id, :created_at).to_h
    @songs = Song.where(id: @likes.keys).limit(8)
    render 'api/songs/index'
  end

  private

  def like_params
    params.require(:like).permit(:likable_id, :likable_type, :from_library)
  end
end
