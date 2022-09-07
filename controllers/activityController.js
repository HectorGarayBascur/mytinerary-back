const {query}= require("express")
const Activity= require("../models/Activity")

const activityController= {
   
        create: async (req, res) => {
            //    const {city,country,photo,population,description,fundation,} = req.body
            try {
                let city = await new City(req.body).save()// req.body tiene que tener todas las variables antes descritas
                res.status(201).json({
                    message: 'Comment Created',
                    success: true,
                    id: city._id
                })
            } catch (error) {
                res.status(400).json({
                    message: "Couldn't create comment",
                    success: false
                })
            }
        },

}

module.exports = activityController