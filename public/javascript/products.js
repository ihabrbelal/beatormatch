// test the js and jquery link
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");

// });

$(document).ready(function() {

    $('#productsHolder').empty();
    displyProducts();
});


var displyProducts = function() {
    var queryURL = "/api/ourproducts";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        console.log(queryURL);
        // var results = response.data;
        console.log(response);
        console.log($('#productsHolder'));

        for (var i = 0; i < response.length; i++) {


            var productDiv = $("<div class ='productHolder thumbnail hero-feature view effect'>");
            var productCaption = $("<div>");
            var productImage = $("<img>");
            productImage.attr("alt", response[i].product_name);
            productImage.attr("src", response[i].image);
            productImage.addClass('productImage');

            var name = response[i].product_name;
            var desc = response[i].product_desc;
            var price = response[i].price;
            var amazonPrice = response[i].amazonPrice;
            var upc = response[i].upc;
            if (price > amazonPrice) {
                price = amazonPrice;

            }



            productCaption.append("<h3>" + name + "</h3>");
            productCaption.append("<div class ='desc'>" + "<p>" + desc + "</p>" + "</div");
            productCaption.append("<p>" + "<a class='btn btn-primary'>" + "Amazon Price $ " + amazonPrice + "</a>");
            productCaption.append("<p>" + "<a class='btn btn-primary'>" + "Our Price: $" + price + "</a>");
            productCaption.append("<p>" + "<a class='btn btn-primary'>" + "Buy Now" + "</a>");
            productDiv.append(productImage);
            productDiv.append(productCaption);
            $('#productsHolder').append(productDiv);


        }


    });
}
