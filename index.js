const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')

const Animal = require('./models/animal');

mongoose.connect('mongodb://localhost:27017/animalAdoption')
    .then(() => {
        console.log('MONGO CONNECTION ESTABLISHED!')
    })
    .catch(err => {
        console.log('MONGO CONNECTION FAILED!')
        console.log(err)
    })

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.get

app.listen(3000, () => {
    console.log('SERVER CONNECTION ESTABLISHED!')
})