const mongoose = require("mongoose")



 const commentSchema = new mongoose.Schema(
    {
        text:{
           type:String,
           requied:true,
           trim:true,
           lowercase:true
        },
        post:{
           type:mongoose.Schema.Types.ObjectId,
           ref:'listing',
           required:true,
        },
        comment_like:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'signup'
}],
        commentedby:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'signup',
            required:true,
}

    },{timestamps:true}

    
 )
 const commentModel = mongoose.model("comment",commentSchema)
 module.exports = commentModel;
 