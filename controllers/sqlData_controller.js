//declare

var db = require("../models");

//Get route for getting IGO2COLLEGE database

module.exports = function(app) {

//get route to index
app.get('/api/College', function(req,res) {

  db.IGO2COLLEGE.findAll({}).then(function(data) {
    res.json(data);
  });
});

console.log(req.body.data);



};
