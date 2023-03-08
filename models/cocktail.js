const mongoose = require('mongoose')
const {Schema} = mongoose

const cocktailSchema = new Schema({
    name: String,
    fruitType: String,
    withAlcohol: {
        type: Boolean,
        default: true
    },
    alcoholType: String,
    origin: String,
    price: Number,
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = Cocktail;

