const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 40
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    city: {
        type: mongoose.Types.ObjectId,
        ref: 'cities',
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 100000
    },
    like: { type: Array, required: true },
    tags: { type: Array, required: true },
    duration: {
        type: Number,
        required: true,
        min: 1,
        max: 8
    },
})


const Itinerary = mongoose.model(
    'itineraries',
    schema
)

module.exports = Itinerary