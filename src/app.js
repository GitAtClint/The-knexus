const express = require('express');
const app = express();
const port = 8081;

//this part didn't work
//const knex = require('knex')(require('../knexfile.js')("development"));
const knexConfig = require('../knexfile.js');
const selectDB = require('knex')(knexConfig.development);

app.get('/', (req, res) => {
    res.send('Applcation up and running.')
})
//**note! - change the timestamps around as needed */

app.get('/pets', (req, res) => {
    selectDB('pet')
        .join('pet_type', 'pet.pet_type_id', '=', 'pet_type.id')
        .join('pet_food_type', 'pet.food_type_id', '=', 'pet_food_type.id')
        .select('pet.name as petName', 'pet_type.name as typeName', 'pet_food_type.description as foodDescription')
        .then(petsData => {
            //can data format here
            var petDetails = petsData.map(pet => `${pet.petName} is a ${pet.typeName} and eats ${pet.foodDescription}`);
            res.json(petDetails);

            //.select('*')
            //var petNames = petsData.map(pet => pet.name);
            //res.json(petNames);
        })
})

app.listen(port, () => {
    console.log("How'd you knex that mex is the nex great exprex food--ran successfully :)");
})