//Requiring express and router

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
const burgersDB = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// Creates homepage
router.get("/", function (req, res) {
    burgersDB.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // Rendering that index.handlebars page with the burgers data
        res.render("index", hbsObject);
    });
});

// Grabs all burger data and returns it as a json object
router.get("/api/allBurgers", function (req, res) {
    burgersDB.all(function (data) {
        res.json(data);
    });
});
// Route that posts new burger data and creates a json object
router.post("/api/newBurger", function (req, res) {
    burgersDB.create(req.body.name, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// Updates the burger by id to move from undevoured to devoured columns
router.put("/api/burgers/:id", function (req, res) {
    burgersDB.eat(req.params.id, function (result) {
        // Send back the ID of the new quote
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            // Ends api connection
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
