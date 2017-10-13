var request = require('request');

var db = require("../models");

 var apiKey = 'XdOHSc8fKhMKidPu2HWqCZmMy9OxtCJamGC580Bi';
 var fields = '_fields=school.name,2013.aid.median_debt.completers.overall,2013.repayment.1_yr_repayment.completers,2013.earnings.10_yrs_after_entry.working_not_enrolled.mean_earnings&page=100';
 var requestUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools.json?&school.name=Stanford&api_key=' + apiKey + '&' + fields;

module.exports = function(app) {
app.get('/school', function(req, res, next) {
request(requestUrl, function (error, response, body) {
  console.log(requestUrl);
  if (!error && response.statusCode == 200) {

    var json = JSON.parse(body);
    console.log(json);
    res.send(json);
  }
 else {

        console.log("There was an error: ") + response.statusCode;
        console.log(body);
    }
})
})
};
