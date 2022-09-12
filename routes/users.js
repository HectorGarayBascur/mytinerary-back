var express = require('express');
var router = express.Router();

const { all, signUp, verifyMail, signIn } = require('../controllers/userController')


/* GET users listing. */


router.get("/", all)
router.get("/verify/:code", verifyMail)
router.post('/auth', signUp);
router.post("/signin", signIn)

module.exports = router;
