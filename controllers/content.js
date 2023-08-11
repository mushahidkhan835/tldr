import Content from "../models/Content.js"
import User from "../models/User.js"

export const addContent = async (req, res, next) => {
    const newContent = new Content({
    userId: req.user.id, ...req.body
    })
    try {
        const savedContent = await newContent.save()
        res.status(200).json(savedContent)
    }catch(err){
        next(err)
    }
}
export const updateContent = async (req, res, next) => {
try{
    const content = await Content.findById(req.params.id)
    if (!content) return next(createError(404, "Content not found!"))
    if (req.user.id == content.userId) {
        const updatedUser = await Content.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true}
        )
        res.status(200).json(updatedContent)
    }
    else{
        return next(createError(404, "You can update only your content!"))
    }
}catch(err){
    next(err)
}
}
export const deleteContent = async (req, res, next) => {
    try{
        const content = await Content.findById(req.params.id)
        if (!content) return next(createError(404, "Content not found!"))
        if (req.user.id == content.userId) {
            const updatedUser = await Content.findByIdAndDelete(req.params.id
            )
            res.status(200).json("The content has been deleted!")
        }
        else{
            return next(createError(403, "You can delete only your content!"))
        }
    }catch(err){
        next(err)
    }
}
export const getContent = async (req, res, next) => {
    try{
        const content = await Content.findById(req.params.id)
        res.status(200).json(content)
    } catch(err){
        next(err)
    }
}

// #Here newContent
export const addView = async (req, res, next) => {
    try{
        await Content.findByIdAndUpdate(req.params.id, {
            $inc:{views: 1}
        })
        res.status(200).json("The views have been increased!")
    } catch(err){
        next(err)
    }
}

export const random = async (req, res, next) => {
    try{
        const content = await Content.aggregate([{$sample: {size: 40}}])
        res.status(200).json(content)
    } catch(err){
        next(err)
    }
}

export const trend = async (req, res, next) => {
    try{
        const content = await Content.find().sort({views: -1})
        res.status(200).json(content)
    } catch(err){
        next(err)
    }
}

export const sub = async (req, res, next) => {
    try{
        const user = await User.findById(req.user.id)
        const subChannels = user.subscribedUsers

        const list = Promise.all(
            
        )
        res.status(200).json(videos)
    } catch(err){
        next(err)
    }
}