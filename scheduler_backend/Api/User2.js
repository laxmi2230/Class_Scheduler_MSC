const express = require("express");
const mongoose = require("mongoose");
const User2 = require("../DB/User2");
const route = express.Router();

route.post("/", async (req, res) => {
  const { availableseats, totalseats, onlineseats, offlineseats, subjectcode } =
    req.body;
  let user2 = {};
  user2.availableseats = availableseats;
  user2.totalseats = totalseats;
  user2.onlineseats = onlineseats;
  user2.offlineseats = offlineseats;
  user2.subjectcode = subjectcode;
  let usermodel2 = new User2(user2);
  await usermodel2.save();
  res.json(usermodel2);
});

route.post("/seats", async (req, res, next) => {
  // console.log("")
  //var subjectcode=req.body.subjectcode;
  // console.log(subjectcode)
  try {
    // let user2 = {};

    let resp = await User2.findOne({ subjectcode: req.body.subjectcode });
    res.send(resp);
  } catch (err) {
    res.status(500);
    res.send({
      err: "Server error",
    });
    next(err);
  }
});

module.exports = route;