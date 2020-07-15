// All connection.query go here!!!

var connection = require("./connection.js")

// Manipulate database using C.R.U.D. functions
var orm = {
    // Selects all items from the table
    selectAll: function (table, callBack) {
        // Connection to MySql that select all items from the created table
        connection.query("SELECT * FROM ??;", [table], function (err, data) {
            if (err) throw err;
            // Callback is run after data is retreived
            return callBack(data)
        });
    },
    // Inserts item into database
    insertOne: function (table, name, callBack) {
        // Connection to MySql that inserts newly receieved data into database
        connection.query(`INSERT INTO ?? (burger_name, devoured) VALUES (?, FALSE)`, [table, name],
        function (err, data) {
            if (err) throw err;
            // Callback is run after data is retreived
            return callBack(data)
        });
    },

    // Updates item withint database
    updateOne: function (table, burger_id, callBack) {
        // Connection to MySql that changes data that user inputs on front end
        connection.query(`UPDATE ?? SET devoured = true WHERE id = ?`, [table, burger_id],
        function (err, data) {
            if (err) throw err;
            // Callback is run after data is retreived
            return callBack(data)
        });
    }
}
// Exports this file to files that require it
module.exports = orm