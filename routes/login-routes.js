 var request = require('request');

var db = require("../models");
var jquery = require("jquery");
var mysql2 = require('mysql2');//login registration

// exports.register = function(req,res){
//   // console.log("req",req.body);
//   var today = new Date();
//   var users={
//     "firstName":req.body.firstName,
//     "lastName":req.body.lastName,
//     "userName":req.body.userName,
//     "password":req.body.password,
//     "createdAt":today,
//     "modifiedAt":today
//   }
//   connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
//   if (error) {
//     console.log("error ocurred",error);
//     res.send({
//       "code":400,
//       "failed":"error ocurred"
//     })
//   }else{
//     console.log('The solution is: ', results);
//     res.send({
//       "code":200,
//       "success":"user registered sucessfully"
//         });
//   }
//   });
// };

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

// module.exports = function(app) {
//
//   // app.get("/api/users/:id", function(req, res) {
//   //   db.Users.findOne({
//   //     where: {
//   //       id: req.body.id
//   //     }
//   //   }).then(function(dbUsers) {
//   //     res.json(dbUsers);
//   //   });
//   // });
//
//   app.get("/users/:id", function(req, res) {
//       console.log(requestUrl);
//       if (!error && response.statusCode == 200) {
//
//         var json = JSON.parse(body);
//         console.log(json);
//         res.send(json);
//       }
//      else {
//
//             console.log("There was an error: ") + response.statusCode;
//             console.log(body);
//         }
//     })
//   }

  //   connection.query("SELECT * FROM Users WHERE id = ?", [req.params.id], function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     // res.render("index", {Users: data});
  //     console.log('index', {Users: data});
  //   });
  // });

  // app.post("/api/createuser", function(req, res) {
  //   db.Post.create({
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  // .then(function(dbPost) {
  //   res.json(dbPost);
  // });
//};

// $(document).ready(function(){
// $("#login").click(function(){
// var userName = $("#userName").val();
// var password = $("#password").val();
// // Checking for blank fields.
// if( userName =='' || password ==''){
// $('input[type="text"],input[type="password"]').css("border","2px solid red");
// $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
// alert("Please fill all fields...!!!!!!");
// }else {
// $.post("login.php",{ userName1: email, password1:password},
// function(data) {
// if(data=='Invalid userName.......') {
// $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
// $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
// alert(data);
// }else if(data=='userName or Password is wrong...!!!!'){
// $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
// alert(data);
// } else if(data=='Successfully Logged in...'){
// $("form")[0].reset();
// $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
// alert(data);
// } else{
// alert(data);
// }
// });
// }
// });
// });
