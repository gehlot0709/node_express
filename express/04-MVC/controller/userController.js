const userModel = require('../userModel/userModel')

const add = async (req, res) => {
    const data = await userModel.create(req.body);
    return res.send(data)
}

module.exports = add;