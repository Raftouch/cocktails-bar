const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/cocktailRoute')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/cocktails-bar')
    console.log('Database connected')
}

app.use(express.urlencoded({extended: false}))
app.use('/api/cocktails', router)
app.listen(3000, () => console.log('Connected to server'))