const userModel = require("../model/userModel");

const add = async (req, res) => {
    const data = await userModel.create(req.body)
    return res.send(data)
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username: username })


    if (!user) {
        console.log(user)
        return res.send("user not found");
    }
    if (user.password !== password) {
        return res.send("password not match")
    }

    return res.send("succes")
}
module.exports = { add, login };