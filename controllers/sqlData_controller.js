//declare

var express = require("express");

var router = express.Router();

var db = require("../models");

//get route to index
router.get('/', function(req,res) {
  res.redirect("/schoolData");
});

//get college table
router.get("/schoolData", function(req, res) {
  db.IGO2COLLEGE.findAll({}).then(function(data) {
    var hbsObject = { College: data };
    res.render("index", hbsObject);
  })
});

router.get("/schoolData", function(req, res) {
  db.IGO2COLLEGE.findOne({
    where: {
      title: "schoolName",

    }
  }).then(function(data) {
    var hbsObject = { College: data };
    res.render("index.html", hbsObject);
  })
});
console.log("suck it");
//post to user api for now
