var express = require('express');
var router = express.Router();

const { create, update, destroy } = require('../controllers/itineraryController')


/* GET users listing. */

router.post('/itineraries', create);
router.patch('/itineraries/:id', update);
router.delete('/itineraries/:id', destroy);


module.exports = router;