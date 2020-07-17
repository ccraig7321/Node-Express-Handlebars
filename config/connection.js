var mysql = require("mysql");
var path = require("path");
require('dotenv').config({path: path.join(__dirname, "../.env")});
console.log(process.env.password)
console.log(path.join(__dirname, "../.env"))

var connection = mysql.createConnection(process.env.hostURL)

// var connection = mysql.createConnection({
//     host: "q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "nlo5f7b3v722enpj",
//     password: process.env.password,
//     database: process.env.db
//   });
  
  // var connection = mysql.createConnection({
  //   host: "localhost",
  //   port: 3306,
  //   user: "root",
  //   password: process.env.password,
  //   database: "burgers_db"
  // });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  module.exports=connection