const express = require("express")
const app = express();
const db = require("./config/db")
const bookStore = require("./model/bookStore")

app.use(express.json());

app.post("/addData", async (req, res) => {
    const data = await bookStore.create(req.body)
    return res.send(data)
})
app.get("/", async (req, res) => {
    const data = await bookStore.find({})
    return res.render(data)
})
app.listen(8000, () => {
    console.log("server start with 8000")
})