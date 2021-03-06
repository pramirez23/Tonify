class Playlist < ApplicationRecord
  validates :name, :user_id, presence: true
  validates :private, presence: true, allow_blank: true, inclusion: { in: [true, false] }
  has_many :likes, as: :likable, dependent: :destroy

  has_one_attached :photo, dependent: :destroy

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :playlist_songs,
    primary_key: :id,
    foreign_key: :playlist_id,
    class_name: :PlaylistSong,
    dependent: :destroy

  has_many :songs, through: :playlist_songs
end
