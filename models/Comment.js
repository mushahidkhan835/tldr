import mongoose from "mongoose";

const CommentScheme  = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    contentId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        requried: true
    },
    
}, {timestamps: true});

export default mongoose.model("Comment", CommentScheme)