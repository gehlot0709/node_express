const mongoose = require("mongoose");

const user = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    image: { type: String }
})

const userModel = mongoose.model("user", user)

module.exports = userModel;