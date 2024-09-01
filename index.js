const express = require("express")
const app = express()
const port = 5000;
const host = "localhost";
const bodyParser = require("body-parser");
const config = require('./boiler-plate/config/key')
const { User } = require("./boiler-plate/models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
const { error } = require("console");
mongoose
  .connect(
    "mongodb+srv://sunwoosong33:Dumbdudumb5868*@boilerplate.fipoa.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate",
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/register", (req, res) => {
  //회원가입할 때 필요한 정보들을 client에서 가져오면 그것들을 db에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, host, () => console.log(`Example app listening on port ${port}!`));
