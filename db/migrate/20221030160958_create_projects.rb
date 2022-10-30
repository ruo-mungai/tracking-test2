class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :category
      t.string :description
      t.string :github_link
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
