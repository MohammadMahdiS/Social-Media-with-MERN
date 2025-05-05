// Launch backend project

// const express = require("express")
import express from "express"

// import db 
import db_connect from "./config/db/db_connect.js"


db_connect();

const app = express()


console.log(app)

const PORT = process.env.PORT | 5000

app.listen(PORT, console.log(`Server is running ${PORT}`))