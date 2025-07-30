require('dotenv').config()

const { default: mongoose } = require("mongoose");


const connectToMongoDB = async () => {
    try {
        console.log("Mongo URI is:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDB connected successfully")
       
    } catch (error) {
        console.log("MongoDB connection failed!", error)
        
    }
    
}
module.exports = connectToMongoDB;