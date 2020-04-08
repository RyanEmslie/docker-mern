const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRouter = require("./src/routes/post");

const PORT = 8080;

// Routes

// DB config
require("./src/database");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log(`Server up and running on port: ${PORT}`);
});
