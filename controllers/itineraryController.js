const { query } = require('express')
const { populate } = require('../models/Itinerary')
const Itinerary = require('../models/Itinerary')

const itineraryController = {
    
    itineraries: async (req,res) => {
        let itineraries
        let query={}

       //Itinerarios by esto es para USER

        if(req.query.user){
    query.user=req.query.user
            }

                //Itinerarios by esto es para CITIES

            if(req.query.city){
                query.city=req.query.city
                        }

        try {
            itineraries= await Itinerary.find(query)
            .populate("user",{name:1})
            .populate("city",{city:1})
            res.status(200).json({
                message:"itineraries by city",
                response: itineraries,
                succes:true
            })
        }

        catch(error){
            res.status(500).json
        }

    },

itinerariesByCity: async (req,res)=> {

let query= {}
if(req.query.cities) {

    query.cities=req.query.cities
}
if (query.itineraries) {
    
    query.cities=req.query.cities
}

    try {
        let itineraries= await Itinerary.find(query)
        .populate("city")
    
    }
    catch(error){
        res.status(500).json
    }

},

    create: async (req, res) => {

        try {
            await new Itinerary(req.body).save()
            .populate("itinerary")
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