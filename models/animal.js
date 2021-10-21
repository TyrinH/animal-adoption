const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type:String,
        required: true
    },
    age: {
        type: Number
    }
})

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;