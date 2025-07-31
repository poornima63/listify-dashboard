require('dotenv').config();
const express = require('express');
const cloudinary = require("./cloudinary/cloudConfig")
const cors = require('cors');
const connectToMongoDB = require('./database');
const authrouting = require("../backend/Router/auth.route")
const contactrouting = require("../backend/Router/contact.route")
const listingroute = require("../backend/Router/listing.route")
const ratingroute =  require("./Router/rating.route")
const commentrouting = require("./Router/comment.route")

// const listingModel = require("./Schema/listing.model")
const data = require("./data")

const app = express();
const PORT = 7000;

// Connect to MongoDB
connectToMongoDB();


console.log(cloudinary.config())
// Middleware

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Listify API is running 🚀");
});
app.use('/api/v2.3/auth' , authrouting )
app.use('/api/contact', contactrouting)
app.use('/api/v2.3/post', listingroute )
app.use('/api/v2.3/comment', commentrouting)
app.use('/api/v2.3/rating', ratingroute)


app.listen(PORT,()=>{
    console.log(`Server is listening to the http://localhost:${PORT}`)
})
