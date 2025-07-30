const mongoose = require("mongoose")


 const listingSchema =  new mongoose.Schema(
    {
title:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
    maxlength:150

},
description:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,

},
image:{
    type:String,
    default:"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=landscape-sky-clouds-259588.jpg&fm=jpg"
},
price:{
    type:Number,
    required:true,
    min:0
},
location:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
},
country:{
    type:String,
    required:true,
    trim:true,
    lowercase:true
},
like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'signup'
    }],
comment:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'comment'
}],
rating:[{
     type:mongoose.Schema.Types.ObjectId,
    ref:'rating'
}],
createdby:{
     type:mongoose.Schema.Types.ObjectId,
    ref:'signup',
    required:true,
}


    },{timestamps:true}
);


const listingModel = mongoose.model("listing",listingSchema)
module.exports = listingModel;