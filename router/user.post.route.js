const express = require("express");
const route = express.Router();
const { create, read } = require("../controller/user.post.controller");

route.post("/create", create);
route.get("/read", read);





module.exports = route;