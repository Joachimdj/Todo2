var express = require('express');
var router = express.Router();
var mongoose  = require("mongoose");
var todo = require('../Models/todo');
var todoModel = mongoose.model("todo");

// READ
router.get('/', function(req, res, next) {
    todo.findAllTodos(function(err,data){
        if (err) return next(err);
        res.setHeader("Content-Type","application/json");
        res.send(JSON.stringify(data));
    });
});


// CREATE
router.post('/', function(req, res, next) {
    todoModel.create(req.body, function (err, data) {
        if (err) return next(err);

        res.json(data);

    });
});

// FIND ONE Item by ID
router.get('/:id', function(req, res, next) {
    todoModel.findById(req.params.id, function (err, data) {
        if (err) return next(err);
        res.setHeader("Content-Type","application/json");
        res.send(JSON.stringify(data));
    });
});

// UPDATE
router.put('/:id', function(req, res, next) {

    todoModel.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

// DELETE
router.delete('/:id', function(req, res, next) {
    todoModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;