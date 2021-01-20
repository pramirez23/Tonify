class ModifyUsersBirthday < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :country, :string, null: true
    change_column :users, :gender, :string, null: false
  end
end
