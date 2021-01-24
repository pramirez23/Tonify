class Like < ApplicationRecord
  validates :user_id, :likable_id, :likable_type, presence: true
  validates :user_id, uniqueness: { scope: :likable_id, :likable_type }
  belongs_to :likable, polymorphic: true
end
