// var request = require('request');

var db = require("../models");
var jquery = require("jquery");

module.exports = function(app) {

  // app.get("/api/users/:id", function(req, res) {
  //   db.Users.findOne({
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbUsers) {
  //     res.json(dbUsers);
  //   });
  // });

  app.get("/users/:id", function(req, res) {
    connection.query("SELECT * FROM Users WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }
      // res.render("index", {Users: data});
      console.log('index', {Users: data});
    });
  });

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
};

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
