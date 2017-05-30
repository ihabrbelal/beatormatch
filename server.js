// dependicies requires

var amazon = require('amazon-product-api');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");
// var mongoose = require("mongoose");
// var logger = require("morgan");



// assign PORT number and app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(`${__dirname}/public`));




// ========================================================//
// setting up database connections//
// ========================================================//


var connection;
var JAWSDB_URL = "mysql://zhjfgifgk712xaou:p6tilh0efzx9j5zo@vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hg7anv85qr3gmo6u"

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "beatormatch_db"
    });
};

// amazon npm
var client = amazon.createClient({
    awsId: "AKIAITLLCYPY6ARKPO5A",
    awsSecret: "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",
    awsTag: "logylink-20"
});
// ======================================================== //
// exports //
// ======================================================== //

module.exports = connection;
module.exports.client;

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

// ======================================================== //
// app path //
// ========================================================//

require("./routing/routes.js")(app);

// ======================================================== //
// server lisetnner //
// ======================================================== //

app.listen(PORT, function() {
    console.log('this is port ' + PORT);

});
