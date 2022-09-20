const { query } = require('express')
const City = require('../models/City')
const Joi = require('joi')

const validator = Joi.object({
    city: Joi.string().min(4).max(40),
    country: Joi.string().min(4).max(40),
    photo: Joi.string().uri().message('INVALID_URL'),
    population: Joi.number().integer().min(1000).max(100000000),
    description: Joi.string().min(0).max(500),
    fundation: Joi.date().less('now')
})


const cityController = {
    create: async (req, res) => {
        //    const {city,country,photo,population,description,fundation,} = req.body
        try {
            let result = await validator.validateAsync(req.body)//lanza error de Joi

            let city = await new City(req.body).save()// req.body tiene que tener todas las variables antes descritas
            res.status(201).json({
                message: 'City created',
                success: true,
                id: city._id
            })
        } catch (error) {

            res.status(400).json({
                message: error.message,
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
                    message: "You get one city",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find city",
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
    },
    readAll: async (req, res) => {
        //necesitamos todas las ciudades
        // let query = {}
        let cities;
        let query = {};

        if (req.query.city) {
            const queryString = new RegExp(`^${req.query.city}`)
            query.city = { $regex: queryString, $options: 'i' }
        }

        try {
            cities = await City.find(query)
            res.json(cities)
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }


        // try {
        //     let cities = await City.find()
        //     if (cities) {
        //         res.status(200).json({
        //             message: "You get cities",
        //             response: cities,
        //             success: true
        //         })
        //     } else {
        //         res.status(404).json({
        //             message: "Couldn't get cities",
        //             success: false
        //         })
        //     }
        // } catch (error) {
        //     console.log(error)
        //     res.status(400).json({
        //         message: "error",
        //         success: false
        //     })
        // }
    },
    update: async (req, res) => {
        //update por ciudad por lo que necesitamos id
        const { id } = req.params
        const city = req.body
        try {
            let result = await validator.validateAsync(req.body)

            let newCity = await City.findOneAndUpdate({ _id: id }, city, { new: true })
            if (city) {
                res.status(200).json({
                    message: "Your city is update",
                    response: newCity,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "We couldn't update your city",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    destroy: async (req, res) => {
        //update por ciudad por lo que necesitamos id
        const { id } = req.params
        try {
            let city = await City.findOneAndDelete({ _id: id })
            if (city) {
                res.status(200).json({
                    message: "Your city is deleted",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "We couldn't delete your city",
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