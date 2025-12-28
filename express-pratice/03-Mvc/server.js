const express = require("express");
const app = express();
const db = require("./config/db")
const userRouter = require("./routes/router");
const userModel = require("./userModel/userModel");

app.use(express.json());
app.use("/userdata", userRouter)

app.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json(data)
})
app.listen(7080, () => {
    console.log("sever start with port 7080")
})