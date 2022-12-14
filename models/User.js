const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 4,
        min: 40,
    },
    lastName: {
        type: String,
        required: true,
        max: 4,
        min: 40,
    },
    photo: {
        type: String,
        required: true,
        validate: function (value){
            if (! value.startsWith('http')) {
                throw new Error('The URL must start with http')
            }
        }
    },
    mail: { type: String, required: true },
    password: [{
        type: String,
        required: true,
        max: 3,
        min: 100
    }],
    country: {
        type: String,
        required: true,
        max: 4,
        min: 40,
    },
    role: { type: String, required: true },
    from: [{ type: String, required: true }],
    logged: { type: Boolean, required: true },
    verified: { type: Boolean, required: true },
    code: { type: String, required: true },
})


const User = mongoose.model(
    'users',
    schema
)

module.exports = User