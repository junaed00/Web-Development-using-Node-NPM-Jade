const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/index", (req, res) => {
  res.render("p2");
});

router.get("/", (req, res) => {
  res.render("index", {
    title: "My first pug website",
  });
});

// router.get("/students", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "students.html"));
// });

// router.get("/time", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "time.html"));
// });

module.exports = router;
