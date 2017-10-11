var db = require("../models");

module.exports = function(app) {

  var queryScoreCard = "https://api.data.gov/ed/collegescorecard/v1/schools?fields=school.name&apikey=XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi";

  app.get("/api/name", function(req, res) {
  db.Name.findAll({}).then(function(dbName) {
    res.json(dbName);
    });
  });
};

//Did we compelete an activity in class using express and an API?
//Do I use school, name, school.name, or school_name?
//What is the table name?
//do we need another api file for our sql database?
