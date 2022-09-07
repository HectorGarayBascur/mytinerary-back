var express = require('express');
var router = express.Router();

const {itineraries, itinerariesByCity, create, update, destroy } = require('../controllers/itineraryController')


/* GET users listing. */
router.get("/",itineraries)
router.get("/:id",itinerariesByCity)
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', destroy);


module.exports = router;