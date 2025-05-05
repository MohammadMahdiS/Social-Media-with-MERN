import mongoose from "mongoose";

const db_connect = () => {
    try {
        mongoose.set("strictQuery", false)
        mongoose.connect("mongodb://127.0.0.1:27017/advance_social_media", {
            useUnifiedToplogy: true,
            useNewUrlParser: true
        })
        console.log("Database connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default db_connect;