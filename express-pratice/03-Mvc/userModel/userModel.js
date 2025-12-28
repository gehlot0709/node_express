const mongoose = require("mongoose");

const user = new mongoose.Schema({
    Emil: { type: String },
    Password: { type: String }
})

const userModel = mongoose.model("user", user)

module.exports = userModel;