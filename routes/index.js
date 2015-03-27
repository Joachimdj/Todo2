var express = require('express');
var router = express.Router();
var session = require("express-session");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET login page. */
router.get('/login', function(req, res, next) {
 console.log(req.body.fName);
    res.render('login', { title: 'login' });

});


module.exports = router;
