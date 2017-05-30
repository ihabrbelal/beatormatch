var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;
var sem3 = require('semantics3-node');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
var api_key = 'SEM30E194675D0D1E593DEFB57B468514C82';
var api_secret = 'YzY0MDE5OWY3M2MzODdjMzc1MDUyYzJjZWU5NGVmYmY';
var upc = [
    '013803204131',
    '018208015030',
    '027242878822',
    '027242876965',
    '027242877115',
    '796483212497'
];

var sem3 = require('semantics3-node')(api_key, api_secret);

// Build the request

for (var i = 0; i < upc.length; i++) {
    var theUpc = upc[i];

    sem3.products.products_field("search", theUpc);

    // Run the request
    sem3.products.get_products(

        function(err, products) {
            if (err) {
                console.log("Couldn't execute request: get_products");
                return;
            }
            // View results of the request
            console.log("Results of request:\n" + JSON.stringify(products));
        });
}




// Listener =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
