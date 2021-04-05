class Album < ApplicationRecord
  validates :title, :year, :artist_id, :genre, :duration, presence: true
  validates :single, presence: true, allow_blank: true, inclusion: { in: [true, false] }
  has_many :likes, as: :likable
  
  has_one_attached :cover_art, dependent: :destroy

  belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

  has_many :songs, dependent: :destroy
end
