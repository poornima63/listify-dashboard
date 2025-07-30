require('dotenv').config()
const uploadOnCloudinary = require("../cloudinary/uploadOnCloudinary")

const userModel = require('../Schema/auth.model')
const jwt = require('jsonwebtoken')
const isVerifyUser = require('../middleware/isverifyUser')
const uploads = require("../middleware/multer")
const bcrypt = require('bcryptjs')
 const express = require("express")
 const router = express.Router()
 const secretKey=process.env.SECRET_KEY

 // signup
 router.post('/signup', async (req ,res)=>{
   const {firstName,lastName,email,password,termAccepted} = req.body
   
    try {
      // for email verfication
       let user = await userModel.findOne({email})
      
       if(user){

       return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });

    } // securing password
        const salt =await  bcrypt.genSalt(10)
        const hashpass =await bcrypt.hash(password,salt)

        user =await userModel.create({
          firstName,
          lastName,
          email,
          password:hashpass,
         termAccepted,

      })
       res.send({
         success: true,
         message: "account created successfully",
         auth: user,
     });
    
    } 
    catch (error) {
          console.log(error)
          res.status(500).json({
          success: false,
         message: "Internal Server Error",
    });

    }
  
 });




 router.post('/login',async (req,res)=>{
  const {email,password} = req.body
   
      let user = await userModel.findOne({email})
      if(!user){
        return res.status(400).json({
          success:false,
          message:"invalid email or password",
        })
      }
      
      const isVerifyPass = await bcrypt.compare(password, user.password)
      console.log(isVerifyPass)
      
        if (!isVerifyPass) {
    return res.status(400).json({
      success: false,
      message: "Invalid email or password",
     });
   } 
    
   // jwt
   let token = jwt.sign({ id: user._id }, secretKey);
     res.send({
       success: true,
       message: "Login successfully",
       user,
       token,
     });
    
        
    
 });

 

 router.get('/getuser', isVerifyUser, async (req, res) => {
  try {
    const user = await userModel.findById(req.user);
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Auth failed' });
  }

})

router.get("/allusers", isVerifyUser, async (req, res) => {
  try {
    const users = await userModel.find().select("-password"); // password hide karein
    res.status(200).json({
      success: true,
      message: "All registered users fetched successfully",
      totalUsers: users.length,
      users: users
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
});





 


router.delete('/delete', isVerifyUser, async (req,res)=>{
    try {
        const deleteACC = await userModel.findByIdAndUpdate(req.user)
        res.send({
          success:true,
          deleteAccount:deleteACC
        })

    } catch (error) {
    
         res.status(500).json({ success: false, message: 'Deletion failed!' });
    
        
    }




  });



router.put('/update-profile-pic', isVerifyUser, uploads.single("avatar"), async (req, res) => {
  try {
    const user = await userModel.findById(req.user); // req.user should be populated from your auth middleware

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

     // Ensure file is present
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }
     let imageUrl = await uploadOnCloudinary(req.file.path)
    console.log(imageUrl)
    if(!imageUrl){
      return res.status(400).json({
        success:false,
        message:"please upload an image"
      })
    }

    // Save Cloudinary URL in DB
    user.avatar = imageUrl;
    await user.save();
    res.status(200).json({ success: true, message: "Avatar updated", avatar: user.avatar });

  } catch (error) {
    console.error("Error updating avatar:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


 module.exports = router;