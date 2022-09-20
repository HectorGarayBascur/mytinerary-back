const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        min: 4,
        max: 40
    },
    country: {
        type: String,
        required: true,
        min: 4,
        max: 40
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
    population: { type: Number, required: true },
    description: {
        type: String,
        required: true,
        max: 500
    },
    fundation: { type: Date, required: true },

})


const City = mongoose.model(
    'cities',
    schema
    //nombre de la conexion
    //esquema de datos
)

module.exports = City