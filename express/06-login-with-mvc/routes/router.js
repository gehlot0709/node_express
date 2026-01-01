const express = require("express");
const { add, login } = require("../controller/userController")

const U_control = express.Router();

U_control.post("/add", add)
U_control.post("/login", login)

module.exports = U_control;
