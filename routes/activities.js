var express = require('express');
var router = express.Router();

const { create, read, readAll } = require('../controllers/activityController')

router.post('/', create);
router.get('/', readAll);
router.get('/:id', read);


module.exports = router;