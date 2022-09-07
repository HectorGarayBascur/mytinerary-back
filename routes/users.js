var express = require('express');
var router = express.Router();

const { all,create } = require('../controllers/userController')


/* GET users listing. */


router.get("/",all)
router.post('/auth', create);

module.exports = router;
