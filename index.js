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
    app.use(express.urlencoded({extended : true}))

    app.get('/animals', async (req, res) => {
        const animals = await Animal.find({})
        res.render('animals/index', { animals })

    })

    app.get('/animals/new', (req, res) => {
        res.render('animals/new')
    })

    app.post('/animals', async (req, res) => {
        const newAnimal = new Animal(req.body)
        await newAnimal.save();
        res.redirect(`/animals/${newAnimal._id}`)

    })
    
    app.get('/animals/:id', async (req, res) => {
        const { id } = req.params;
        const foundAnimal = await Animal.findById(id)
        res.render('animals/show', { foundAnimal })
    })

app.listen(3000, () => {
    console.log('SERVER CONNECTION ESTABLISHED!')
})