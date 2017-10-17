//declare
var db = require("../models");

//Get route for getting IGO2COLLEGE database

module.exports = function(app) {

//get route to index
app.get('/api/college', function(req,res) {

  db.Colleges.findAll({}).then(function(dbColleges) {
    res.json(dbColleges);
  });
});

};
