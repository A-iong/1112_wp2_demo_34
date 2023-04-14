var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/overview_34', function (req, res, next) {
  res.render('midprep_34/overview_34', {
    name: 'A-ion',
    ID: '210410134',
  });
});

module.exports = router;
