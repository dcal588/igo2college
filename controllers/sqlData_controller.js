//declare
var db = require("../models");

//Get route for getting IGO2COLLEGE database

module.exports = function(app) {

//get route to index
app.get('/api/college', function(req,res) {

  db.College.findAll({}).then(function(dbColleges) {
    res.json(dbCollege);
  });
});

};
