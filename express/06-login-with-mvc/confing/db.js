const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login")
const db = mongoose.connection;

db.on("connected", () => {
    console.log("database connected")
})