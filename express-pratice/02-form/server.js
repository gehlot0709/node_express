const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded())
// ----------------------------------------------------------//

let student = [
    {
        id: 1,
        name: "gehlot"

    }
]
// ----------------------------------------------------------//
app.get("/", (req, res) => {
    res.render("form", { student })
})

// ----------------------------------------------------------//

app.post("/insertData", (req, res) => {
    const { id, name } = req.body;
    let obj = {
        id: Number(id)
        , name
    }
    student.push(obj)
    res.redirect("/")
})

// ----------------------------------------------------------//

app.listen(7080, () => {
    console.log("server listen")
})