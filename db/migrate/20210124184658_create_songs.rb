class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.integer :track_num, null: false
      t.integer :duration, null: false

      t.timestamps
    end
    add_index :songs, :album_id
    add_index :songs, :track_num
  end

end
