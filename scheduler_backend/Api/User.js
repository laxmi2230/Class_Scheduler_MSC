const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const User = require("../DB/User");
const route = express.Router();

{/*route.get("/Laxmi", async (req, res) => {
  res.send("Hey hi Laxmi");
}); */}


route.post("/", async (req, res) => {

  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(req.body.password, saltPassword) 

  const { email, password, subjectcode, subjectname } = req.body;
  let existingTeacher = await User.findOne({ subjectcode: subjectcode, email : email });
  if (existingTeacher) {
    res.send(existingTeacher);
    return;
  }

  let user = {};
  user.email = email;
  user.password = securePassword;
  user.subjectcode = subjectcode;
  user.subjectname = subjectname;
  let usermodel = new User(user);
  await usermodel.save();
  res.json(usermodel);
});

module.exports = route;
