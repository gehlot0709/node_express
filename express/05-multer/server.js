const express = require("express");
const db = require("./config/db")
const app = express()
const userModel = require("./model/userModel")
const multer = require("multer")

app.set("view engine", "ejs")
app.use(express.json())

app.use('/upload', express.static('upload'));   


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single("image")

app.post("/addData", upload, async (req, res) => {
    const { username, password } = req.body;
    let image = ""
    if (req.file) {
        image = req.file.path
    }
    const data = await userModel.create({
        username,
        password,
        image
    })
  return  res.redirect("/")
})

app.get('/', async (req, res) => {
    const data = await userModel.find({});
    res.render("file", { users: data })

})
app.listen(7200, () => {
    console.log("sever started with port 7200")
})