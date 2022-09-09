const { query } = require('express')
const User = require('../models/User')

const userController = {
    all : async (req,res) => {
        let users
        let query={}

        if(req.query.users){
    query.users=req.query.users
            }

        try {
            users= await User.find(query)
        
            res.status(200).json({
                message:"you get all users",
                response: users,
                succes:true
            })
        }

        catch(error){
            res.status(500).json
        }

    },



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