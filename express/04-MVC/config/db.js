const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/emplyoee");
const db = mongoose.connection;

db.on("connected", (data, err) => {
    console.log("databse connect")
})

module.exports = db;