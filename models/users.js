// Dependencies
// =============================================================

// Requires Sequelize library
const Sequelize = require("sequelize");
// Requires our connection to the DB
const sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
const User = sequelize.define("user", {
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