var mysql = require("mysql");

var connection;

var JAWSDB_URL = "mysql://bwm1st7n5ut9qcfi:bleoejk4bg5xp586@mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rjf2m60m18uwmblq"



if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "beatormatch_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});



module.exports = connection;
