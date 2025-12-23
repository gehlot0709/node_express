const express = require('express')
const db = require("./config/db")
const userModel = require('./userModel/userModel')

const app = express()
app.use(express.json())

app.post("/insertData", async (req, res) => {
    const data = await userModel.create(req.body)
    return res.send(data)
})

app.get('/', async (req, res) => {
    const data = await userModel.find({})
    return res.send(data)
})

app.delete("/:id", async (req, res) => {
    const id = id.params.id
    const data = await userModel.findOneAndDelete(id)
    return res.send("succes")
})
app.listen(7080, () => {
    console.log("server start ")
})