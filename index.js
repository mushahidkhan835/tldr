import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import contentRoutes from "./routes/contents.js"
import commentRoutes from "./routes/comments.js"
import authenticationRoutes from "./routes/authentication.js"
const app = express()

dotenv.config()
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to DB!")
    }).catch(err => {
        throw err;
    });
};
app.use("/api/authentication", authenticationRoutes)
app.use("/api/users", userRoutes)
app.use("/api/contents", contentRoutes)
app.use("/api/comments", commentRoutes)

app.listen(3000, () => { 
    connect()
    console.log("Connected to Server!")
});