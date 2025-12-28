const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/")



const db = mongoose.connection

db.on("connected", (data, err) => {
    console.log("data")
})