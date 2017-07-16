var express = require("express");
var loginRouter = express.Router();
var jwt = require('jsonwebtoken');  // Require the config file containing the key to sign the JWT.
var jwtConfig = require('../jwtConfig');

loginRouter.post("/", (req, res) => {
  var token = jwt.sign( { user: "Rick" }, jwtConfig.secret, {
    expiresIn: 60 * 60 * 24
  });
  res.send ({
    token: token
  })
});

module.exports = loginRouter;