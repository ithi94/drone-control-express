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


router.post('/left', function(req, res, next) {
	control.left();
  
});

router.post('/right', function(req, res, next) {
	control.right();
  
});

router.post('/up', function(req, res, next) {
	control.up();
  
});

router.post('/down', function(req, res, next) {
	control.down();
  
});




module.exports = router;
