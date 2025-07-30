const express = require("express")
const router = express.Router()
const isverifyUser = require("../middleware/isverifyUser")
const listingModel = require("../Schema/listing.model")
const commentModel = require("../Schema/comment.model")

router.post("/addcomment/:listId", isverifyUser, async (req, res) => {
  const { listId } = req.params;
  const { text } = req.body;

  try {
    const post = await listingModel.findById(listId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Listing not found",
      });
    }

    const comment = await commentModel.create({
      text,
      post: listId,
      commentedby: req.user,
    });

    post.comment.push(comment._id);
    const updatedPost = await post.save();
    res.status(200).json({
      success: true,
      message: "Comment added successfully",
      post: updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.put('/updatecomment/:commentId', isverifyUser, async (req, res) => {
  const { commentId } = req.params;
  const { text } = req.body;

  try {
    const comment = await commentModel.findById(commentId);

    if (!comment) {
      return res.status(404).json({ success: false, message: "Comment not found" });
    }

    // Only the user who commented can update it
    if (comment.commentedby.toString() !== req.user.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized action" });
    }

    comment.text = text;
    await comment.save();

    res.status(200).json({ success: true, message: "Comment updated successfully", comment });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});



router.put("/likecomment/:commentId", isverifyUser, async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await commentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found"
      });
    }

    let index = comment.comment_like.indexOf(req.user); // find user in likes array
    let isLike = true;

    if (index > -1) {
      // Already liked → remove like
      comment.comment_like.splice(index, 1);
      isLike = false;
    } else {
      // Not liked yet → add like
      comment.comment_like.push(req.user);
    }

    const updatedComment = await comment.save();

    res.status(200).json({
      success: true,
      message: isLike ? "Comment liked" : "Comment unliked",
      isLike,
      comment: updatedComment
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
});


router.delete('/deletecomment/:commentId', isverifyUser, async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await commentModel.findById(commentId);
    if (!comment) {
      return res.status(404).json({ success: false, message: "Comment not found" });
    }

    // Only the user who commented can delete it
    if (comment.commentedby.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized action" });
    }

    // Remove comment reference from listingModel
    await listingModel.findByIdAndUpdate(comment.post, {
      $pull: { comment: commentId }
    });

    // Delete the comment itself
    await commentModel.findByIdAndDelete(commentId);

    res.status(200).json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});






module.exports = router