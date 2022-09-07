var express = require('express');
var router = express.Router();


const { create, update, destroy, readAll } = require('../controllers/itineraryController')


/* GET users listing. */

router.get('/', readAll)

router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', destroy);


module.exports = router;