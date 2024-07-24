/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'dog', description: 'doggo food yo'},
    {id: 2, name: 'cat', description: 'meow mix'},
    {id: 3, name: 'bird', description: 'big ole sack of seed'},
    {id: 4, name: 'fish', description: 'Peter Griffin: well your very nice to ask. Well, first I hang the ole worm out there. They usually go for it. So, I jerk them around a little, they fight for a while, and then they just lay back and accept it'}
  ]);
};