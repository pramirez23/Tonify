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
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :songs, only: [:show]
    resources :albums, only: [:show]
    resources :artists, only: [:show]
    resources :playlists, only: [:create, :update, :destroy, :index, :show]
    resources :playlist_songs, only: [:create, :destroy]
  end
end
