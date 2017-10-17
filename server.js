var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');



var app = express();
var PORT = process.env.PORT || 8080;


var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));
app.use(methodOverride('_method'))


//var router = express.Router();
require("./routes/api-routes.js")(app);
require("./routes/login-routes.js")(app);
// router.post('/register',login.register);
// router.post('/login',login.login)
// app.use('/api', router);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
