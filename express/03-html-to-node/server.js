const express = require("express");
const app = express()
app.set("view engine", "ejs")
app.use("/", express.static("assets"))
app.listen(8000, () => {
    console.log("server start at 8000")
})
const MiddleWare = (req, res, next) => {
    if (req.query.age >= 18) {
        next()
    }
}
app.get("/", MiddleWare,(req, res)=> {
    res.render("index")
})