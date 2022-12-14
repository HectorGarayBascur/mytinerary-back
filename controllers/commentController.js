const { query } = require('express')
const Comment = require('../models/Comment')


const commentController = {

    create: async (req, res) => {
        const {
            comment,
            user,
            event,

        } = req.body
        try {
            await new Comment(req.body).save()
            res.status(201).json({
                message: 'comment created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "could't create comment",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let query = {}

        if (req.query.user) {
            query.user = req.query.user
        }
        if (req.query.itineraries) {
            query.itineraries = req.query.itineraries
        }
        try {
            let comments = await Comment.find(query)
                .populate("user")
                .populate("itinerary")
            res.status(200).json({
                message: "you get comments",
                response: comments,
                success: true
            })

        }
        catch (error) {
            console.log(err)
            res.status(500).json()
        }

    },
    read: async (req, res) => {
        const { itineraryid } = req.params
        try {
            let comments = await Comment.find({ itinerary: itineraryid })
                .populate('user', ['_id', 'lastName', 'name', 'photo'])
            if (comments) {
                res.status(200).json({
                    message: "You get comments",
                    response: comments,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Couldn't find comments",
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
}


module.exports = commentController