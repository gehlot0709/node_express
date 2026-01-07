const express = require("express");
const app = express();
const port = 7000;

const db = require("./config/db")
app.listen(port, () => {
    console.log(`server start with port ${port}`)
})