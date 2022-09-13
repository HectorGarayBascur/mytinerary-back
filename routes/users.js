var express = require('express');
var router = express.Router();

const { all, signUp, verifyMail, signIn, read } = require('../controllers/userController')


/* GET users listing. */


router.get("/", all)
router.get('/:id', read);
router.get("/verify/:code", verifyMail)
router.post('/auth', signUp);
router.post("/signin", signIn)

module.exports = router;
