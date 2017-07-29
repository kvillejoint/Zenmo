const User = require(../models/users.js);


// If user sends data to create a new account
app.post("/api/new", function(req, res) {

    // take the request
    var user = req.body;

    // Create a routeName
    var routeName = user.username.replace(/\s+/g, "").toLowerCase();

    // Add user to database using sequelize
    User.create({
        routeName: routeName,
        username: User.username,
        password: User.password,
        first_name: User.first_name,
        last_name: User.last_name,
        phone: User.phone,
        email: User.email,
        balance: User.balance,
        confirmation_code: User.confirmation_code
    });

});