var express = require('express');
var router = express.Router();
var Person = require('../Models/person');


/* GET users listing. */
router.get('/', function(req, res, next) {
    Person.findAllPersons(function(err,data){

        res.setHeader("Content-Type","application/json");
        res.send(JSON.stringify(data));

    })

});

module.exports = router;
