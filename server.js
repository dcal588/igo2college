var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')
var exphbs = require("express-handlebars");
var login = require('./routes/login-routes');//for login registration




var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
app.use(methodOverride('_method'))


require("./routes/api-routes.js")(app);
require("./routes/login-routes.js")(app);


//login registration
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// var router = express.Router();
// // test route
// router.get('/', function(req, res) {
//     res.json({ message: 'welcome to our upload module apis' });
// });
// //route to handle user registration
// //router.post('/register',login.register);
// router.post('/login',login.login)
// app.use('/', router);
//end login registration

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
