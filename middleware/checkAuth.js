
var jwt = require('jsonwebtoken');
var config = require('../jwtConfig.js');

var auth = function(req, res, next) {
 var token = req.body.token || req.headers["x-access-token"];
  if (token) {
   jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
         console.error("Verification Error", err);
         return res.status(401).send(err);
      } else {
         req.decoded = decoded;
         return next();
      }
   });
  } else {
    // Redirect back to login if token not found.
   res.redirect(401, '/')
   }
}
