var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/menu_xx', async function (req, res, next) {});

router.get('/menu_xx/:category', async function (req, res, next) {});

module.exports = router;
