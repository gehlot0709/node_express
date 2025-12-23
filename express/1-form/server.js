const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.use(express.urlencoded())


let student = [
    {
        id: 1,
        name: "pratham"
    },
    {
        id: 2,
        name: "gehlot"
    }
]
app.get("/", (req, res) => {
    res.render("form", { student })
})

app.post("/insertData", (req, res) => {
    const { id, name } = req.body;
    let obj = {
        id, name
    }
    student.push(obj)
    res.redirect("/")
})

app.get("/delete", (req, res) => {
    const id = req.query.id;
    let ans = student.filter((el, i) => {
        return el.id !== id
    })
    student = ans;
    res.redirect("/")
})

app.get("/update", (req, res) => {
    const id = req.query.id;
    let ans = student.filter((el, i) => {
        return el.id === id;
    })
    res.render("update", { updateValue: ans[0] })
})

app.post("/updateData", (req, res) => {
    const { id, name } = req.body;
    let obj = {
        id, name
    }
    student.push(obj)
    res.redirect("/")
})
app.listen(7080, () => {
    console.log("server start")
})