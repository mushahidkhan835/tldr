import { createError } from "../error.js"
import Comment from "../models/Comment.js"
import Content from "../models/Content.js"

export const addComment = async (req, res, next) => {
    const newComment = new Comment({...req.body, userId: req.user.id})
    try{
        const savedComment = await newComment.save()
        res.status(200).send(savedComment)

    }catch(err){
        next(err)
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id)
        const content = await Content.findById(res.params.id)

        if (req.user.id == comment.userId || req.user.id == content.userId) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted!")
        }
        else{
            return next(createError(403, "You cannot delete comment!"))
        }

    }catch(err){
        next(err)
    }
}


export const getComments = async (req, res, next) => {
    try{
        const comments = await Comment.find({
            contentId: req.params.contentId
        })
        res.status(200).json(comments)
    }catch(err){
        next(err)
    }
}