class Album < ApplicationRecord
  validates :title, :year, :artist_id, :single, :genre, :duration, presence: true
  
  has_many :likes, as: :likable
  
  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :songs,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Song
end
