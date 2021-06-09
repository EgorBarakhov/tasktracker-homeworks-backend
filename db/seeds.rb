# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  Task.create(
    text: Faker::Lorem.sentence(word_count: 3),
    day: Faker::Date.forward(14),
    reminder: Faker::Boolean.boolean
  )
end
