class Playlist < ApplicationRecord
  validates :name, :user_id, :private, presence: true
  has_many :likes, as: :likable

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has many :playlist_songs,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :Playlist,
    dependent: :destroy

  has_many :songs,
    through: :playlist_songs,
    source: :song
end
