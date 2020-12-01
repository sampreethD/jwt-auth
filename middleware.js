let jwt = require("jsonwebtoken");
const config = require("./config.js");

const validateToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
   token = token && token.split(" ") || [];
  if (token[0] === "Bearer") {
    token = token[1];
  }

  if (token.length) {
    jwt.verify(token, config["secret"], (error, decoded) => {
      if (error) {
        return res.json({
          success: false,
          message: 'Invalid token'
        });
      } else {
          console.log('decoded' ,decoded);
          req.decoded = decoded;
          next();
      }
    });
  } else {
      return res.json({
          success:false,
          message:'Auth token not passed'
      })
  }
}

module.exports ={
    validateToken : validateToken
}
