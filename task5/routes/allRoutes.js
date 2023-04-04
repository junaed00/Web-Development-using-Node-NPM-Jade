const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("form");
});

router.post("/display-form-details", (req, res) => {
  const { userName, userAge, userPassword } = req.body;
  console.log(userName);
  console.log(userAge);
  console.log(userPassword);
  res.send("Thank you!");
});

module.exports = router;
