const userModel = require("../userModel/userModel")
const add = async (req, res) => {
    const data = await userModel.create("user", userr)
    return res.send(data)
}

module.exports = add;