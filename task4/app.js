const path = require("path");

const express = require("express");

const app = express();

const allRoutes = require("./routes/allRoutes");
app.use(allRoutes);
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.listen(3000, () => {
  console.log("started express server at post 3000");
});
