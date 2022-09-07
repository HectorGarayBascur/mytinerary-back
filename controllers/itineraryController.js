const { query } = require('express')
const Itinerary = require('../models/Itinerary')

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
                .populate('user', {name:1})
                .populate('city', {city:1})

            if (itineraries) {
                res.status(200).json({
                    message: "Your get itineraries "+req.query.city ,
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
    create: async (req, res) => {
        try {
            await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'Itinerary created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "Couldn't create itinerary",
                success: false
            })
        }
    },
    update: async (req, res) => {

        const { id } = req.params
        const itinerary = req.body
        try {
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
                message: "error",
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