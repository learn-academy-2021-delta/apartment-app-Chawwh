class AddUrlToApartments < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :photo_url, :string
  end
end
