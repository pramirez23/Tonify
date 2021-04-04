class Api::SearchController < ApplicationController
  def index

    @playlists = {};
    @artists = {};
    @albums = {};
    @songs = {};

    @search_query = search_params[:query]
    
    if search_params[:query].length > 0
      @playlists = Playlist.select("playlists.*")
                          .where("LOWER(playlists.name) LIKE ? ", "%#{search_params[:query].downcase}%")
                          .limit(8)

      @artists = Artist.select("artists.*")
                          .where("LOWER(artists.name) LIKE ? ", "%#{search_params[:query].downcase}%")
                          .limit(8)

      @albums = Album.select("albums.*")
                          .where("LOWER(albums.title) LIKE ? ", "%#{search_params[:query].downcase}%")
                          .limit(8)

      @songs = Song.select("songs.*")
                          .order(:title)
                          .where("LOWER(songs.title) LIKE ? ", "%#{search_params[:query].downcase}%")
                          .limit(5)
    end

    render :index
  end

  private
  
  def search_params
    params.require(:search).permit(:query)
  end
end