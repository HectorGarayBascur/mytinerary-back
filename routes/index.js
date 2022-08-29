var express = require('express');
var router = express.Router();
const cityRouter = require('./city')
const cityRouter = require('./users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json([]);
});

router.get('/:id', function (req, res, next) {
  if (req.params.id == 123) {
    return res.status(404).json()
  }
  res.json({
    id: req.params.id
  })
});

router.use('/city', cityRouter)
router.use('/users', userCities)


module.exports = router;