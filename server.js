var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.send("this is the main page");
})


app.listen(PORT, function () {
    console.log("app is listening on http://localhost:" + PORT)
})