import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import contentRoutes from "./routes/contents.js"
import commentRoutes from "./routes/comments.js"
import authenticationRoutes from "./routes/authentication.js"
import cookieParser from "cookie-parser"

const app = express()

dotenv.config()
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to DB!")
    }).catch(err => {
        throw err;
    });
};
app.use(cookieParser())
app.use(express.json())
app.use("/api/authentication", authenticationRoutes)
app.use("/api/users", userRoutes)
app.use("/api/contents", contentRoutes)
app.use("/api/comments", commentRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message  || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})

app.listen(3000, () => {   
    connect()
    console.log("Connected to Server!")
});