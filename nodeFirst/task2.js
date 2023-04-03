const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("got it");
  res.send("Welcome to Express");
});
app.listen(() => {
  console.log("started express server at post 4000");
});
