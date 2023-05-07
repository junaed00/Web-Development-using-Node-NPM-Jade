const express = require("express");
const app = express();

const router = express.Router();
router.get("/", (req, res) => {
  res.render("form");
});
let data=[]
router.post("/display-form-details", (req, res) => {
   
  // console.log(userName);
  // console.log(userAge);
  // console.log(userPassword);
  // res.send("Thank you!");
// data.push(alldata)
app.locals.xd=req.body;
res.redirect('/form-submission-msg')
});
router.get('/form-submission-msg',(req,res)=>{
  res.render('showform',app.locals.xd)
  // console.log(data)
  // console.log(app.locals.xd)
  // res.send('sudi')
})

module.exports = router;
