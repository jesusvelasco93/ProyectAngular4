var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	// console.log('algo');
   	res.sendFile(path.join(__dirname+'./../public/other.html'));
});

module.exports = router;