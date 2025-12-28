const express = require("express");

const { add, alldata } = require("../controller/userController")

const userRouter = express.Router();

userRouter.post("/add", add)
userRouter.post("/", alldata)
module.exports = userRouter;