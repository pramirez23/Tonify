class Artist < ApplicationRecord 
  validates :name, presence: true
  
  has_many :likes, as: :likable
  has_many :songs, through: :albums

  has_many :albums,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album
end
