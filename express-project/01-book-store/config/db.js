const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bookstore")
const db = mongoose.connection;

db.on("connected", () => {
    console.log("database connected")
})