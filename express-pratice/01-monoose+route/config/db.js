const mongoose = require('mongoose')
mongoose.connect("")
const db = mongoose.connection

db.on("connected", () => {
    console.log("data")
})

module.exports = db;