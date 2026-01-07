const mongoose = require("mongoose");

const user = new mongoose.Schema[{
    username: { type: String },
    password: { type: String }
}]

const userModel = user.model("user", user)

module.exports = userModel;