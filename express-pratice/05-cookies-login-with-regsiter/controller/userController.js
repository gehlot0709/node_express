const userModel = require("../model/userModel")

const add = async (req, res) => {
    const data = await userModel.create(req.body);
    return res.data;
}

module.exports = add;
