const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: String,
    password: String,

});
const userModel = mongoose.model("user", user)
module.exports = userModel;


