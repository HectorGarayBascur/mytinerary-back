var express = require('express');
var router = express.Router();

const { create } = require('../controllers/userController')


/* GET users listing. */

router.post('/auth', create);

module.exports = router;
