var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BFHL' });
  console.log(res.value);
});




module.exports = router;
