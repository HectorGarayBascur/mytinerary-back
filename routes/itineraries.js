var express = require('express');
var router = express.Router();


const { create, update, destroy, read, readAll } = require('../controllers/itineraryController')


/* GET users listing. */


router.post('/', create);
router.get('/', readAll);
router.get('/:id', read);
router.patch('/:id', update);
router.delete('/:id', destroy);


module.exports = router;