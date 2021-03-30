class RemoveLikesUniqueConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, [:likable_id, :likable_type]
    add_index :likes, [:likable_id, :likable_type]
  end
end
