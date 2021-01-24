class Song < ApplicationRecord
  validates  :title, :album_id, :track_num, :duration, presence: true
  
  has_many :likes, as: :likable

  belongs_to :album,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Album

  has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :PlaylistSong
end
