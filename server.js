// Dependencies
// =============================================================

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");


//Sets PORT variable
const PORT = process.env.PORT || 3000;

const app = express();

//Serves static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Sets handlebars as the view engine
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Imports routes controllers
const routes = require('./controllers/routes.js');

app.use('/', routes);

app.listen(PORT);
console.log('App is listening on PORT ' + PORT);

