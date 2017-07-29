// Dependencies
// =============================================================

// Requires Sequelize library
const Sequelize = require("sequelize");
// Requires our connection to the DB
const sequelize = require("../config/connection.js");

// Creates a "Transaction" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
        const Transaction = sequelize.define('Transaction', {
                payer: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                },
                payee: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                },
                transaction_type: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                },
                dollar_amount: {
                    type: DataTypes.DECIMAL,
                    allowNull: false,
                    validate: {
                        len: [1]
                    }
                },
                {
                    timestamps: false
                });
        
        Transaction.associate = function(models) {
            Transaction.belongsTo(models.User, {
                as: 'payer',
                foreignKey: {
                   //this should be set to the payer as one foreign key and payee as second foreign key using aliases
                },
                as: 'payee',
                foreignKey: {

                }
            });
        };

        return Transaction;
        }


