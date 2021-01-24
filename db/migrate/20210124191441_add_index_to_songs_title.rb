class AddIndexToSongsTitle < ActiveRecord::Migration[5.2]
  def change
    add_index :songs, :title
  end
end
