const City = require('../models/City')

const cityController = {
    create: async (req, res) => {
        //    const {city,country,photo,population,description,fundation,} = req.body
        try {
            await new City(req.body).save()// req.body tiene que tener todas las variables antes descritas
            res.status(201).json({
                message: 'City created',
                succes: true
            })
        } catch (error) {
            res.status(400).json({
                message: "Couldn't create city",
                success: false
            })
        }
    }
}

module.exports = cityController