const { query } = require('express')
const { populate } = require('../models/Itinerary')
const Itinerary = require('../models/Itinerary')
const Joi = require('joi')

const validator = Joi.object({
    name: Joi.string().min(4).max(40),
    city: Joi.string(),
    user: Joi.string(),
    price: Joi.number().integer().min(0).max(100000),
    like: Joi.array().items(Joi.number()),
    tags: Joi.array().items(Joi.string(), Joi.number()),
    duration: Joi.number().integer().min(1).max(8),
})


const itineraryController = {



    readAll: async (req, res) => {
        let query = {}

        if (req.query.user) {
            query.user = req.query.user
        }

        if (req.query.city) {
            query.city = req.query.city
        }

        try {
            let itineraries = await Itinerary.find(query)
                .populate('user', { name: 1 })
                .populate('city', { city: 1 })

            if (itineraries) {
                res.status(200).json({
                    message: "Your get itineraries ",
                    response: itineraries,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find itineraries",
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
    read: async (req, res) => {
        const { id } = req.params
        try {
            let itinerary = await Itinerary.findOne({ _id: id })
                .populate('user')
                .populate('city')
            //city = {} // si no lo encuentra
            //si city no existe => city = {} retorno un json con 404
            if (itinerary) {
                res.status(200).json({
                    message: "You get one itinerary",
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find itinerary",
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

    create: async (req, res) => {

        try {
            let result = await validator.validateAsync(req.body)

            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Itinerary created',
                success: true,
                tags: itinerary.tags
            })
        } catch (error) {
            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },
    update: async (req, res) => {

        const { id } = req.params
        const itinerary = req.body
        try {
            let result = await validator.validateAsync(req.body)

            let newItinerary = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
            if (itinerary) {
                res.status(200).json({
                    message: "Your itinerary is update",
                    response: newItinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "We couldn't update your itinerary",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: message.error,
                success: false
            })
        }
    },
    destroy: async (req, res) => {

        const { id } = req.params
        try {
            let itinerary = await Itinerary.findOneAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: "Your itinerary is deleted",
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "We couldn't delete your itinerary",
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
module.exports = itineraryController