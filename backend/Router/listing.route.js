const express = require("express")
const isverifyUser = require('../middleware/isverifyUser')
const listingModel = require('../Schema/listing.model')
const uploadOnCloudinary = require("../cloudinary/uploadOnCloudinary")
const router =  express.Router()
const uploads = require("../middleware/multer")



router.post('/addlist', isverifyUser, uploads.single("image"), async (req, res) => {
  console.log("Body:", req.body);
  console.log("File:", req.file);


  const { title, description, price, location, country } = req.body;

  try {

    let imageUrl = await uploadOnCloudinary(req.file.path)
    console.log(imageUrl)
    if(!imageUrl){
      return res.status(400).json({
        success:false,
        message:"please upload an image"
      })
    }
    const list = await listingModel.create({
      title,
      description,
      price,
      location,
      country,
      image:imageUrl,
      // image: req.file.path,
      createdby: req.user,
    });

    res.status(200).json({ success: true, message: "List added successfully", post: list });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get('/alllist',async (req,res)=>{
    try {
        const list = await listingModel.find({}).sort({createdAt:-1}).populate("createdby", "firstName lastName email avatar")
      .populate({
        path: "rating",
        populate: {
          path: "ratedby",
          select: 'firstName email avatar',
        }
        })
        .populate({
        path:'comment',
        populate:{
          path:'commentedby',
          select:'name email avatar'
        }
      })
      .populate({
        path:"comment",
        populate:{
          path:"comment_like",
          select:'name email avatar'
        }
      })
        res.status(200).json({
            success:true,
            message:"list fetched successfully",
            total_results:list.length,
            results:list
            
        })
    } catch (error) {
        res.status({
            success:false,
            message:"internal server error"
        });
    }
});


router.get('/yourlist', isverifyUser, async (req,res)=>{
  try {
    
    const yourlistings = await listingModel.find({createdby: req.user }).sort({createdAt5:-1}).populate("createdby","firstName lastName email avatar")
        res.status(200).json({
          success:true,
           success: true,
      message: "Your listings fetched successfully",
      results: yourlistings.length,
     total_results: yourlistings
        });

  } catch (error) {
     res.status(500).json({ success: false, message: "Internal server error" , error });
  }
})


router.put("/like/:listId", isverifyUser, async (req, res) => {
  const { listId } = req.params;

  const list = await listingModel.findById(listId);
  let index = list.like.indexOf(req.user);
  let isLike = true;
  if (index > -1) {
    list.like.splice(index, 1);
    isLike = false;
  } else {
    list.like.push(req.user);
  }

  const post = await list.save()
  res.status(200).json({
    success: true,
    message: isLike ? 'List liked successfully' : 'list dislike successfully',
    isLike: isLike,
    post:post
  });
});



router.put('/updatelist/:listid', isverifyUser, uploads.single("image"), async (req,res)=>{
  console.log(req.params.listid)
  const listId= req.params.listid
    
 try {
    const mylisting = await listingModel.findById(listId);

    // Not found
    if (!mylisting) {
      return res.status(404).json({ success: false, message: "Listing not found" });
    }

    // Authorization: check if logged-in user is the creator
    if (mylisting.createdby.toString() !== req.user.toString()) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    // Update fields
    const { title, description, price, location, country } = req.body;

    mylisting.title = title || mylisting.title;
    mylisting.description = description ||  mylisting.description;
    mylisting.price = price || mylisting.price;
    mylisting.location = location || mylisting.location;
    mylisting.country = country || mylisting.country;

    mylisting.image = req.file.path
    await mylisting.save();

    res.status(200).json({ success: true, message: "List updated successfully", updatedList: mylisting });
  } catch (err) {
    console.error("Error updating list:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});


router.delete('/deletelist/:listid', async (req,res)=>{
  const listId = req.params.listid
  try {
    const deletelist = await listingModel.findByIdAndDelete(listId)
       res.status(200).json({
      success: true,
      message: "List deleted successfully",
      post: deletelist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }

  
})


module.exports = router;