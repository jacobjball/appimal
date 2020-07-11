
User.create(email: "test@gmail.com", favorite: "amoeba", password: 'password', password_confirmation: 'password')
User.create(email: "test2@gmail.com", favorite: "frogs", password: 'password', password_confirmation: 'password')
User.create(email: "test3@gmail.com", favorite: "twigs", password: 'password', password_confirmation: 'password')
User.create(email: "test4@gmail.com", favorite: "ducks", password: 'password', password_confirmation: 'password')
User.create(email: "test5@gmail.com", favorite: "dragons", password: 'password', password_confirmation: 'password')
User.create(email: "test6@gmail.com", favorite: "hippo", password: 'password', password_confirmation: 'password')

100.times do
  name = Faker::Creature::Dog.name
  breed = Faker::Creature::Dog.breed
  age = "#{rand(100)+1} years old"
  user_id = rand(6)+1
  Dog.create(name: name, breed: breed, age: age, user_id: user_id)
end
50.times do
  name = Faker::Creature::Cat.name
  color = Faker::Color.color_name
  cost = "$#{rand(50)}"
  Cat.create(name: name, color: color, cost: cost)
end

10.times do
  Toy.create(name: Faker::Device.model_name)
end

10.times do
  Food.create(name: Faker::Food.dish )
end

puts "data is seed friends"