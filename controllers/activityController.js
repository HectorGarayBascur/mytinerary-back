
const Activity= require("../models/Activity")

const activityController= {
   
        create: async (req, res) => {

            try {
       await new Activity(req.body).save()
          
            
                res.status(201).json({
                    message: 'Activity Created',
                    success: true,
                    
                })
            } catch (error) {
                res.status(400).json({
                    message: "Couldn't create Activity",
                    success: false
                })
            }
        },

        read: async (req,res)=> {


            let activities
            let query= {}

            if (req.query.itinerary) {
                query.itinerary= req.query.itinerary
            }

            try{
activities = await Activity.find(query)
.populate("itinerary")
res.status(200).json({
    message:"activity by itinerary",
    response: activities,
    succes:true

})}
        catch(error) {
            res.status(400).json({
                message: "Couldn't found activities",
                success: false
            })}}


}

module.exports = activityController