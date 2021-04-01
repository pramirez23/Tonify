class Api::PlaylistSongsController < ApplicationController
  before_action :ensure_logged_in

  def create
    playlist_id = playlist_song_params[:playlist_id]
    song_id = playlist_song_params[:song_id]

    @playlist_song = PlaylistSong.new({
      playlist_id: playlist_id,
      song_id: song_id
    })
      
    @playlist = Playlist.includes(:songs).find_by(id: playlist_song_params[:current_playlist_id])
    @user = User.find_by(id: current_user.id)

    if @playlist_song.save
      if @playlist
        @songs = PlaylistSong.where(playlist_id: @playlist.id).order(:created_at)
        render 'api/playlists/show'
      else
        render 'api/users/show'
      end
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(playlist_song_params)
    @playlist = Playlist.includes(:songs).find_by(id: @playlist_song[:playlist_id])
    @songs = PlaylistSong.where(playlist_id: @playlist.id).order(:created_at)

    if @playlist_song
      @playlist_song.destroy!
      render 'api/playlists/show'
    else
      render json: ['Song not found'], status: 404
    end
  end

  def add_album
    playlist_id = playlist_song_params[:playlist_id]
    album_id = playlist_song_params[:album_id]

    @album = Album.find_by(id: album_id)

    added_songs = @album.songs.map do |song|
      PlaylistSong.new({
        playlist_id: playlist_id,
        song_id: song.id
      })
    end

    added_songs.each do |song|
      if song.save
      else
        render json: ['Something went wrong...'], status: 422
      end
    end
    
    render 'api/albums/show'
  end

  def add_album_song
    playlist_id = playlist_song_params[:playlist_id]
    song_id = playlist_song_params[:song_id]

    @playlist_song = PlaylistSong.new({
      playlist_id: playlist_id,
      song_id: song_id
    })
      
    @album = Album.find_by(id: playlist_song_params[:album_id])

    if @playlist_song.save
      render 'api/albums/show'
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:id, :playlist_id, :song_id, :current_playlist_id, :album_id)
  end
end
