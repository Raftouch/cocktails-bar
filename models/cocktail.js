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
    price: Number,
    isPrepared: {
        type: Boolean,
        default: false
    }
})

const Cocktail = mongoose.model('Cocktail', cocktailSchema)

module.exports = Cocktail;

