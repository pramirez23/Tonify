class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.boolean :private, null: false
      t.text :description

      t.timestamps
    end
    add_index :playlists, :user_id
    add_index :playlists, :name
  end
end
