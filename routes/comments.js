var express = require('express')
var router = express.Router()

const {
    create,
    all,
    read,

} = require('../controllers/commentController')


router.post('/', create)
router.get('/', all)
router.get('/:itineraryid', read)

module.exports = router