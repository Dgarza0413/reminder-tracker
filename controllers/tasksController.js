var express = require("express");
var router = express.Router();
var task = require("../models/task.js");

router.get("/", function (req, res) {
    task.all(function (data) {
        var hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tasks", function (req, res) {
    task.create([
        "task", "completed"
    ], [
            req.body.name, req.body.completed
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/tasks/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    task.update(
        {
            completed: req.body.completed
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/tasks/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    task.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;