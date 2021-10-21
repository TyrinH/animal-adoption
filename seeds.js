const mongoose = require('mongoose');
const Animal = require('./models/animal');

mongoose.connect('mongodb://localhost:27017/animalAdoption')
    .then(() => {
        console.log('MONGO CONNECTION ESTABLISHED!')
    })
    .catch(err => {
        console.log('MONGO CONNECTION FAILED!')
        console.log(err)
    })


// const a = new Animal({
//     name: 'George',
//     species: 'dog',
//     age: 6
// })

// a.save().then (a => {
//     console.log(a)
// })
// .catch(e => {
//     console.log(e)
// })

const seedAnimals = [
    {
        name: 'Fred',
        species: 'dog',
        age: 12
    },
    {
        name: 'Scarlet',
        species: 'dog',
        age: 4
    },
    {
        name: 'Waffle',
        species: 'dog',
        age: 2
    },
    {
        name: 'Oscar',
        species: 'dog',
        age: 3
    }
]

Animal.insertMany(seedAnimals);