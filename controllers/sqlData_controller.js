//declare

var express = require("experess");

var router = express.Router();

var db = require("../models");

//get route to index
router.get('/', function(req,res) {
  res.redirect("/schoolData");
});

//get college table
router.get("/schoolData", function(req, res) {
  db.College.findAll({}).then(function(data) {
    var hbsObject = { schoolData: data };
    res.render("index", hbsObject);
  })
});
console.log("konichiwa");
//post to user api for now
