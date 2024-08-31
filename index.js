const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://sunwoosong33:Dumbdudumb5868*@boilerplate.fipoa.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {
  userNewUrlParser: true, useUnifiendTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello World!, 안녕하세요"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
