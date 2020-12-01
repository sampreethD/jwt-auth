const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config.js");
const middleware = require("./middleware.js");
const app = express();
const port = process.env.port || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/auth", (req, res) => {
  let token = jwt.sign({ username: req.body.username , iat: new Date().getSeconds()}, config.secret, {
    expiresIn: 60,
  });
  res.json({
    success: true,
    message: "Authenticated",
    token: token,
  });
});

app.get('/', middleware.validateToken, (req,res)=> {
    res.json({
        status: true,
        message:'validated get',
    })
})

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
