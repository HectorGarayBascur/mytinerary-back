var express = require('express');
var router = express.Router();
const cityRouter = require('./cities')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'HOLAAAAAAAAAAAAAAAAA' });
});

// router.get('/:id', function (req, res, next) {
// //   if (req.params.id == 123) {
// //     return res.status(404).json()
// //   }
// //   res.json({
// //     id: req.params.id
// //   })
// // });

router.use('/cities', cityRouter)
router.use('/comments', cityRouter)


module.exports = router;