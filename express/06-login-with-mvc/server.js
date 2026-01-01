const express = require("express");
const app = express();
const db = require("./confing/db")
const U_control = require("./routes/router")

app.use(express.json())
app.use("/userData", U_control)


app.listen(8000, () => {
    console.log("server start with 8000")
})