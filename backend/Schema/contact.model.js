const { default: mongoose } = require("mongoose");


const contactSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,

        },
        email:{
            type:String,
            required:true,
            match:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}$/,
        },
        subject:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true,
        }
    },{timestamps:true}
)
const contactModel = mongoose.model("contact",contactSchema)
module.exports = contactModel;