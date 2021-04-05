class Artist < ApplicationRecord 
  validates :name, presence: true
  
  has_many_attached :photos, dependent: :destroy

  has_many :likes, as: :likable
  has_many :albums
  has_many :songs, through: :albums
  has_many :playlist_songs, through: :songs
  has_many :playlists, through: :playlist_songs
end
