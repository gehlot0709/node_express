const express = require("express")
const add= require("../controller/userController")
const U_router = express.Router();

U_router.post("/add", add);

module.exports = U_router;