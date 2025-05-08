// Launch backend project

// const express = require("express")
import express from "express"

// import db 
import db_connect from "./config/db/db_connect.js"

// import env
import dotenv from "dotenv"

dotenv.config();

db_connect();

const app = express()

app.post("/api/users/register", (req, res) => {
    res.json("کاربر ثبت نام شد")
})
app.post("/api/users/login", (req, res) => {
    res.json("کاربر وارد حساب کاربری خود شد")
})
app.post("/api/users", (req, res) => {
    res.json("کاربرهای سایت")
})

console.log(app)

const PORT = process.env.PORT | 5000

app.listen(PORT, console.log(`Server is running ${PORT}`))