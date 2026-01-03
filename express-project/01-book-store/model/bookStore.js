const mongoose = require("mongoose")

const store = new mongoose.Schema({
    title: { type: String },
    author: { type: String },
    pages: { type: String }
})

const bookStore = mongoose.model("bookStore", store)

module.exports = bookStore;