// Dependencies
// =============================================================

// Requires Sequelize library
const Sequelize = require("sequelize");
// Requires our connection to the DB
const sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
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


    User.associate = function(models) {
        User.hasMany(models.Transaction, {
            onDelete: "cascade"
        });

    };

    return User;

};