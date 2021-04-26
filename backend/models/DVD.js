const mongoose = require('mongoose')
const Schema = mongoose.Schema

//collection and schema
let DVD = new Schema({
    title: String,
    date: String,
    director: String,
    score: Number,
}, {
    collection: 'DVDs'
})

module.exports = mongoose.model('DVD', DVD)