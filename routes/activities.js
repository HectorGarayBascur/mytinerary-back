var express = require('express');
var router = express.Router();

const { 
    create,
    read
  } =
   require('../controllers/activityController')



router.post('/', create);
router.get("/", read)



module.exports = router;