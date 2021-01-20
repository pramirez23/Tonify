class RemoveBirthday < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthday
    remove_column :users, :country
  end
end
