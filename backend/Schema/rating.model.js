const mongoose = require("mongoose")


  const ratingSchema = new mongoose.Schema(
    {
        star:{
            type:Number,
            min:1,
            max:5
        },
        
        text:{
            type:String,
            trim:true,
            lowercase:true
        },
         post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'listing',
            required:true,
                },
        ratedby:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'signup',
            required:true,
        }
    },{timestamps:true}
  )
  const ratingModel = mongoose.model("rating",ratingSchema)
  module.exports = ratingModel;