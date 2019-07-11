var orm = require("../config/orm.js");

var task = {
    all: function (cb) {
        orm.all("tasks", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("tasks", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("tasks", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = task;