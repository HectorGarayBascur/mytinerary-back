var express = require('express');
var router = express.Router();
//traerme el metodo con desestructuracion
const { create, read, readAll, update, destroy } = require('../controllers/cityController')//aca me traigo una propiedad/metodo del objeto/controlador
//traerme el metodo con el objeto completo
// const cityController = require('../controllers/cityController')// aca me traigo todo el objeto/controlador
// const createController = cityController.create
// const readController = cityController.read
// const destroyController = cityController.destroy
// const updateController = cityController.update


/* GET users listing. */

// router.metodo('la ruta',controlador)

router.post('/', create);
router.get('/', readAll);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', destroy);

//localhost4000/events/

module.exports = router;