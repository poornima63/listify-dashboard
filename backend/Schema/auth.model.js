const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim:true,
    lowercase:true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    // match:/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-z]{2,0}$/,
  },
  phone:{
    type:String,
    trim:true,
   
    maxlength:10,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim:true,
    
  },
  termsAccepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  avatar:{
    type:String,
    default:"https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
  },
  address:{
    type:String,
    default:""
  },
  country:{
    type:String,
    default:"",
  }
  
},{timestamps:true});

const UserModel = mongoose.model("signup", authSchema);

module.exports = UserModel;