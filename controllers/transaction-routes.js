// Requiring our models
var db = require("../models/transactions.js");


// Routes
// =============================================================
module.exports = function(app) {

    //GET route that sends user to the login page
    app.get("/", function(req, res) {
        res.render("login");
    });

    //GET route that sends the user to the feed page
    app.get("/feed", function(req, res) {
        res.render("feed");
    });

    // GET route for getting all of the Transactions
    app.get("/api/transactions", function(req, res) {
        var query = {};
        if (req.query.User_id) {
            query.UserId = req.query.User_id;
        }
        db.Transaction.findAll({
            where: query
        }).then(function(dbTransaction) {
            res.json(dbTransaction);
        });
    });

    // GET route for retrieving a single transaction
    app.get("/api/transactions/:id", function(req, res) {
        db.Transaction.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbTransaction) {
            console.log(dbTransaction);
            res.json(dbTransaction);
        });
    });

    // POST route for saving a new transaction
    app.post("/api/transactions", function(req, res) {
        db.Transaction.create(req.body).then(function(dbTransaction) {
            res.json(dbTransaction);
        });
    });

    // DELETE route for deleting a single transaction
    app.delete("/api/transactions/:id", function(req, res) {
        db.Transaction.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTransaction) {
            res.json(dbTransaction);
        });
    });

    // PUT route for updating transactions
    app.put("/api/transactions", function(req, res) {
        db.Transaction.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbTransaction) {
            res.json(dbTransaction);
        });
    });
};