const express = require('express')
const app = express()
const db = require("./config/db")

app.listen(7080, () => {
    console.log("server start with port 7080")
})