var amazon = require('amazon-product-api');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

// connection to the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "beatormatch_db"
});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =============================================================
var client = amazon.createClient({
    awsId: "AKIAITLLCYPY6ARKPO5A",
    awsSecret: "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",
    awsTag: "logylink-20"
});

app.get("/", function(req, res) {
    res.redirect("/api/ourproducts");
});

app.get("/api/ourproducts", function(req, res) {
    connection.query("SELECT * FROM products;", function(err, data) {
        if (err) {
            throw err;
        }
        var products = data;
        var product = {};
        //pull UPC from data
        for (i = 0; i < products.length; i++) {
            product = products[i];
            var theUpc = product.upc;
            console.log("Here is the UPC: " + theUpc);
            //  making call to amazon
            client.itemLookup({
                idType: 'UPC',
                itemId: theUpc,
                responseGroup: 'ItemAttributes'
            }, function(err, results, response) {
                if (err) {
                    console.log('err', err);
                } else {
                    //  results[0].ItemAttributes[0].ListPrice[0].FormattedPrice
                    product.amazonPrice = results[0].ItemAttributes[0].ListPrice[0].FormattedPrice;
                    console.log('product', product);
                    // res.send(product);
                };
            });
        }
        res.json(products);
    });
});
// Listener =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
