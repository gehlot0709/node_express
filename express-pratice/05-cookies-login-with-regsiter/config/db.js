const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/login_logout")
const db = mongoose.connection;

db.on("connected", () => {
    console.log("database is connected")
})