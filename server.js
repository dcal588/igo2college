var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
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

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
