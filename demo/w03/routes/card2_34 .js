var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_34/index', { name: 'AIONG',id: ' 201410634' });
});

module.exports = router;
