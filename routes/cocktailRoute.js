const express = require('express')
const Cocktail = require('../models/cocktail')
const router = express.Router()

// créer un cocktail
router.post('/new', async(req, res) => {
    try {
        const newCocktail = await Cocktail(req.body)
        newCocktail.save()
        res.send({message: 'Cocktail successfully added'})
    } catch (error) {
        console.error(error)
    }
})

// récupérer nos cocktails
router.get('/all', async(req, res) => {
    try {
        const cocktails = await Cocktail.find({})
        res.send(cocktails)
    } catch (error) {
        console.error(error)
    }
})

// acceder à un cocktail grace à son id (get by id)
router.get('/id', async(req,res) => {
    try {
        const cocktail = await Cocktail.findById('64079cb0a3bee7464f34ba51')
        res.send(cocktail)
    } catch (error) {
        console.error(error)
    }
})

// modifier un cocktail grace à son id (put by id)
router.put('/id', async(req,res) => {
    try {
        const cocktail = await Cocktail.findById('64079cb0a3bee7464f34ba51')
        cocktail.isPrepared = true
        await cocktail.save()
        res.send(cocktail)
    } catch (error) {
        console.error(error)
    }
})

// supprimer un cocktail grace à son id (delete by id)
router.delete('/id', async(req,res) => {
    try {
        const cocktail = await Cocktail.findByIdAndDelete('64079cb0a3bee7464f34ba51')
       res.send('Cocktail successfully deleted')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router