class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :race
      t.string :class
      t.string :alignment

      t.timestamps
    end
  end
end
