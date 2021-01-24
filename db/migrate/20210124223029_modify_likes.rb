class ModifyLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :likable_id
    remove_index :likes, :likable_type
    add_index :likes, [:likable_id, :likable_type], unique: true
  end
end
