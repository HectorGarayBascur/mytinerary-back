const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: String },
    city: { type: String },
    price: { type: Number, required: true },
    like: { type: Array, required: true },
    tags: { type: Array, required: true },
    duration: { type: Number, required: true },

})


const Itinerary = mongoose.model(
    'itinerarys',
    schema
)

module.exports = Itinerary