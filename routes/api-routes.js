// var request = require('request');

var db = require("../models");

//  var apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
//  var fields = '_fields=school.name,2015.aid.median_debt.completers.overall,2015.cost.tuition.in_state';
//  var requestUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?&api_key=' + apiKey + '&' + fields;

// module.exports = function(app) {
// app.get('/school', function(req, res, next) {
// request(requestUrl + "&school.name=" + req.query["school.name"], function (error, response, body) {
//   console.log(requestUrl);
//   if (!error && response.statusCode == 200) {

//     var json = JSON.parse(body);
//     console.log(json);
//     var data = json
//     console.log(data);
//     res.send(data);
//   }
//  else {

//         console.log("There was an error: ") + response.statusCode;
//         console.log(body);
//     }
// })
// })
// };

module.exports = function(app) {


  app.get("/api/college", function(req, res) {

    db.College.findAll({}).then(function(dbCollege) {

      res.json(dbCollege);
    });
  });
};