var express = require("express");
var exphbs = require("express-handlebars");
const connection = require("./config/connection");
var app = express();
var path = require("path");
// var burgerDB = require("./models/burger.js");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

// Sets up the Express-handlebars data
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring the controller
var routes = require("./controllers/burger_controller.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });