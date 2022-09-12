var express = require('express');
var router = express.Router();

const { all, signUp } = require('../controllers/userController')


/* GET users listing. */


router.get("/", all)
router.post('/auth', signUp);

module.exports = router;
