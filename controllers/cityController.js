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
    },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id: id })
            //city = {} // si no lo encuentra
            //si city no existe => city = {} retorno un json con 404
            if (city) {
                res.status(200).json({
                    message: "You get one event",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find event",
                    success: false
                })

            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }
}
module.exports = cityController