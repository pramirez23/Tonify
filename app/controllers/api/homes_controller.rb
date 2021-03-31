class Api::HomesController < ApplicationController
  def show
    @playlists = Playlist.find(Playlist.pluck(:id).sample(5))
    @artists = Artist.find(Artist.pluck(:id).sample(5))
    @albums = Album.find(Album.pluck(:id).sample(5))
    render :show
  end
end