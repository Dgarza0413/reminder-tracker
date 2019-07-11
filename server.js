require("dotenv").config()
var express = require("express");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.TASK_PASSWORD_DB,
    database: "task_manager_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


app.get("/", function (req, res) {
    connection.query("SELECT * FROM tasks", function (err, data) {
        if (err) throw err;

        res.render("index", { tasks: data })
    });
});

//creates a new task
app.post("/api/tasks", function (req, res) {
    connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function (err, result) {
        if (err) {
            return res.status(500).end();
        }

        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});


app.listen(PORT, function () {
    console.log("app is listening on http://localhost:" + PORT)
})