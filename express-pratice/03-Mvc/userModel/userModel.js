const mongoose = require("mongoose")

const user = new mongoose.Schema({
    user: { type: String },
    pass: { type: String }
})

const userModel = mongoose.model("user", user)

module.exports = userModel;