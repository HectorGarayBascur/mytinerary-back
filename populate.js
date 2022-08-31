require('dotenv').config()
//importamos la xonexion a la base de datos
const db = require('./config/database')

//importar los modelos que necesito para las operaciones
const City = require('./models/City')

City.create({
    city: "Santiago",
    country: "Chile",
    photo: "sadasddsad",
    population: 2000000,
    description: "jghkjkhjkghjkjhgk",
    fundation: "2022-12-01",
})

//node populate.js