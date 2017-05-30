// test the js and jquery link//
// $(document).ready(function() {
//     console.log("hello");
//     alert("hello");
//     insertItem();

// });


$(document).ready(function() {
    $('#submit').on('click', function() {
        event.preventDefault();

        // create item object
        // ajax POST itemObject to /api/items
        // wait for res

        var itemsObject = {
            category: $('#category').val(),
            upc: $('#upc').val(),
            asin: $('#asin').val(),
            product_name: $('#name').val(),
            product_desc: $('#desc').val(),
            image: $('#image').val(),
            price: $('#price').val()
        };



        $.post("/admin/items", itemsObject)
            .done(function(data) {
                console.log(data);

            })
            .fail(function(error) {
                console.log("THIS FAILED");
            });
        $('#category').val("");
        $('#upc').val("");
        $('#asin').val("");
        $('#name').val("");
        $('#desc').val("");
        $('#image').val("");
        $('#price').val("");
    });
});
