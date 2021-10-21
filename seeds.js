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


const a = new Animal({
    name: 'George',
    species: 'dog',
    age: 6
})

a.save().then (a => {
    console.log(a)
})
.catch(e => {
    console.log(e)
})