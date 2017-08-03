console.log('feed.js connected');

// move this logic to the feed.js file
// add click handelers to both buttons and send ajax calls to them specifically to match the routes in controllers
// 0. Fire AJAX to appropriate route
// Note: Be sure to reset the value when you log out
// Iinside of function that runs when user logs out, add:
// 0. Update the database
// 1. Upudate window.loggedInUser

// SERIOUS FOOTGUN.   
// window.loggedInUser = returnedUser;
// window.loggedInUser.email;

// 0. Getting numbers to db/routes, then actual processing/math is done on server
$("#pay").on("click", function () {
    console.log("pay button clicked");
    $.ajax({
        url: '/api/transactions/update/', // Be careful re any captured params you might need
        method: 'POST',
        data: {
            // email: {{}}
            payee_email: $("#targetUser").val(),
            dollar_amount: $("#amount").val(),
            // transaction: "pay"
        }
    }).then(function (result) {
        // .then call is not necessary
        console.log(result);
    }).fail(function (error) {
        console.error(error);
        // add a div w/ a red border explaining the error
    })
})