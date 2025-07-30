const express = require("express")
const isverifyUser = require("../middleware/isverifyUser")
const ratingModel = require("../Schema/rating.model")
const listingModel = require("../Schema/listing.model")
const router = express.Router()


router.post('/addrating/:listId', isverifyUser, async (req,res)=>{

    // console.log(req.params.listid)
    const{listId} = req.params
    const {star, text} = req.body
    console.log(listId)

try {
     const post = await listingModel.findById(listId);
        if (!post) {
          return res.status(404).json({
            success: false,
            message: "post not found",
          });
        }
        console.log(post);
    
        let isRating = await ratingModel.findOne({
          post: listId,
          ratedby: req.user,
        });
        console.log(isRating);
        if (isRating) {
          return res.status(400).json({
            success: false,
            message: "You have already rated this post",
          });
        }
        isRating = await ratingModel.create({
          star,
          text,
          post: listId,
          ratedby: req.user,
        });
        console.log(isRating._id);
        post.rating.push(isRating._id);
        const updatedPost = await post.save();
        res.status(200).json({
          success: true,
          message: "rating added successfully",
          post: updatedPost,
        });
      
} catch (error) {
     res.status(500).json({
      success: false,
      message: "Internal server error",
    });
}

});



router.put('/updaterating/:listId', isverifyUser, async (req, res) => {
  const { listId } = req.params;
  const { star, text } = req.body;

  try {
    const post = await listingModel.findById(listId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }

    const existRating = await ratingModel.findOne({
      post: listId,
      ratedby: req.user
    });

    if (!existRating) {
      return res.status(400).json({
        success: false,
        message: "No existing rating found to update",
      });
    }

    const updatedRating = await ratingModel.findByIdAndUpdate(
      existRating._id,
      { star, text },
      { new: true }
    );

    // NO need to push anything to post.rating
    // Since rating already exists, it should already be linked

    res.status(200).json({
      success: true,
      message: "Rating updated successfully",
      rating: updatedRating,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.delete('/deleterating/:ratingId', isverifyUser, async (req, res) => {
  const ratingId = req.params.ratingId;

  try {
    const rating = await ratingModel.findById(ratingId);
    if (!rating) {
      return res.status(404).json({ success: false, message: "Rating not found" });
    }

    
    if (rating.ratedby.toString() !== req.user.toString()) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const postId = rating.post;

    
    await ratingModel.findByIdAndDelete(ratingId);

    //  Pull rating ID from listing
    const listing = await listingModel.findById(postId);
    if (listing) {
      listing.rating.pull(ratingId);
      await listing.save();
    }

    res.status(200).json({ success: true, message: "Rating deleted and listing updated" });
  } catch (error) {
    console.error("Delete rating error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});





module.exports = router;