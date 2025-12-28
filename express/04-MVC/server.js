const express = require('express');
const app = express();
const db = require('./config/db');
const U_router = require("./router/userRouter")

app.use(express.json());
app.use("/userdata", U_router)
app.listen(7009, () => {
    console.log("server start with 7009 port")
})