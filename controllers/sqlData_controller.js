// //declare
//
// var express = require("express");
//
// var router = express.Router();
//
// var db = require("../models");
//
// //get route to index
// router.get('/', function(req,res) {
//   res.redirect("/schoolData");
// });
//
// //get college table
// router.get("/schoolData", function(req, res) {
//   db.College.findAll({}).then(function(data) {
//     var hbsObject = { schoolData: data };
//     res.render("index", hbsObject);
//   })
// });
//
// router.get("/schoolData", function(req, res) {
//   db.College.findOne({
//     where: {
//       title: "schoolName"
//     }
//   }).then(function(data) {
//     var hbsObject = { college: data };
//     res.render("index.html", hbsObject);
//   })
// });
// //post to user
// router.post("/schoolData/create", function (req,res) {
//   db.Users.create({
//     firstName:  req.body.firstName,
//     lastName:   req.body.lastName,
//     userName:   req.body.userName,
//     password:   req.body.password
//   }).then(function () {
//     res.redirect("/");
//   })
// });
//
// module.export = router;
