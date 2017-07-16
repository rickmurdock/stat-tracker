const express = require("express");
const loginRouter = express.Router();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwtConfig');

loginRouter.post("/", (req, res) => {
  var token = jwt.sign( { user: "Rick" }, jwtConfig.secret, {
    expiresIn: 60 * 60 * 24
  });
  res.send ({
    token: token
  })
});

module.exports = loginRouter;