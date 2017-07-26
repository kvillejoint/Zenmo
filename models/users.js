// Dependencies
// =============================================================

// Requires Sequelize library
var Sequelize = require("sequelize");
// Requires our connection to the DB
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var User = sequelize.define("user", {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
    balance: {
        type: Sequelize.DECIMAL
    },
    confirmation_code: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false
});

// Syncs with DB
User.sync();

// Makes the User Model available for other files (will also create a table)
module.exports = User;