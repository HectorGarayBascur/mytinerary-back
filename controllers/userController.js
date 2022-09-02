const { query } = require('express')
const User = require('../models/User')

const userController = {
    create: async (req, res) => {
        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'User created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "Couldn't create user",
                success: false
            })
        }
    },
}
module.exports = userController;