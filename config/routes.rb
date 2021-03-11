Rails.application.routes.draw do
#   namespace :api do
#     get 'playlists/show'
#   end
#   namespace :api do
#     get 'artists/show'
#   end
#   namespace :api do
#     get 'albums/show'
#   end
#   namespace :api do
#     get 'songs/show'
#   end
#   namespace :api do
#     get 'likes/create'
#     get 'likes/destroy'
#   end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :songs, only: [:show, :index]
    resources :albums, only: [:show, :index]
    resources :artists, only: [:show, :index]

    resources :playlists, only: [:create, :update, :destroy, :index, :show] do
      resources :songs, only: [:index]
      post :album, to: "playlist_songs#add_album", as: "add_album"
      post :album_song, to: "playlist_songs#add_album_song", as: "add_album_song"
      post :artist_song, to: "playlist_songs#add_artist_song", as: "add_artist_song"
    end

    resources :playlist_songs, only: [:create, :destroy, :index]
  end
end
