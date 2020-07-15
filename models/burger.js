// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Information being pulled in from the orm file to perform commands that are specfic to the database
var burgersDB = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.insertOne("burgers", name, function(res) {
      cb(res);
    });
  },
  eat: function(burger_id, cb) {
    orm.updateOne("burgers", burger_id, function(res) {
      cb(res);
    });
  },
};


module.exports = burgersDB
