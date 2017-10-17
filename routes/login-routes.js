 var request = require('request');

var db = require("../models");
var jquery = require("jquery");
var mysql2 = require('mysql2');//login registration


module.exports = function(app) {
  app.get("/users/:id", function(req, res) {
  var userName= req.body.userName;
  var password = req.body.password;
  connection.query('SELECT * FROM Users WHERE userName = ?',[userName], function (error, results, fields) {
  if (error) {
     console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
     console.log('The solution is: ', results);
    if(results.length >0){
      if([0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"User name and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"User name does not exits"
          });
    }
  }
  });
});
};

module.exports = function(app) {
  app.post("/", function(req, res) {

  var firstName= req.body.firstName;
  var lastName=  req.body.lastName;
  var userName= req.body.userName;
  var password= req.body.password;

  connection.query("INSERT INTO Users (firstName, lastName, userName, password) VALUES (?)", [req.body.firstName],[req.body.lastName],[req.body.userName],[req.body.password],
  function(err, results) {
    if (err) {
      throw err;
    }
    console.log(results);
    Alert('Your account has been created.');
  })
});
};
