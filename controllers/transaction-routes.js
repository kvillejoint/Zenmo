// Requiring our models
var db = require("../models");



// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the Transactions
    app.get("/api/transactions", function(req, res) {
        db.Transaction.findAll({})
        .then(function(dbTransaction) {
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
    app.post("/api/transactions/pay", function(req, res) {
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
    app.put("/api/transactions/update", function(req, res) {
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