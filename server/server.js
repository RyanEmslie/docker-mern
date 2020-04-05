const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log(`Server up and running on port: ${PORT}`);
});
