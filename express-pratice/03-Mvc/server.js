const express = require("express");
const app = express();
const db = require("./config/db")
const userModel = require("./userModel/userModel")

app.use(express.json())

app.listen(7100, () => {
    console.log("server start with port 7080");
})