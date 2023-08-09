import mongoose from "mongoose";

const ContentSchema  = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        requried: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0    
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [String],
        default: []
    },
    dislikes: {
        type: [String],
        default: []
    },
}, {timestamps: true});

export default mongoose.model("Content", ContentSchema)