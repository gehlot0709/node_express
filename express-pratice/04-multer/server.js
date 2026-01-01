const express = require("express");
const app = express()
const db = require("./config/db")
const userModel = require("./model/userModel")
const multer = require("multer");

app.set("view engine","ejs")
app.use(express.json())

app.use('/uploads', express.static('uploads'));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single("image");

app.post('/addData', upload, async (req, res) => {
    const { firstName, lastName } = req.body;
    let image = ""
    if (image.file) {
        image = req.file.path
    }
    const data = await userModel.create({
        firstName,
        lastName,
        image
    })
    return res.redirect("/")
})

app.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.render("file", { users: data })
})
app.listen(7800, () => {
    console.log("server start with 7800")
})