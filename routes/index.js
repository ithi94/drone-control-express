var express = require('express');
var router = express.Router();
var control = require('../Control');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  res.render('index', { title: 'Express' });
});


router.get('/takeOff', function(req, res, next) {
	control.takeOff();
  
});


router.get('/land', function(req, res, next) {
  	control.land();
  
});


router.post('/move', function(req, res, next) {
	var obj = req.body;
	control.move(obj);
  
});



module.exports = router;
