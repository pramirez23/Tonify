class Song < ApplicationRecord
  validates  :title, :album_id, :track_num, :duration, presence: true
  
  has_many :likes, as: :likable

  has_one_attached :audio_file, dependent: :destroy

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

  has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :PlaylistSong

  has_one :artist, through: :album
  has_many :playlists, through: :playlist_songs
end