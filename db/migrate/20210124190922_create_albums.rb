class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.integer :year, null: false
      t.boolean :single, null: false
      t.string :genre, null: false
      t.integer :duration, null: false

      t.timestamps
    end
    add_index :albums, :artist_id
    add_index :albums, :title
  end
end
