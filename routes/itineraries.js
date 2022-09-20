var express = require("express");
var router = express.Router();
let passport = require("../config/passport");

const {
  create,
  update,
  destroy,
  read,
  readAll,
  like,
} = require("../controllers/itineraryController");

/* GET users listing. */

router.post("/", create);
router.get("/", readAll);
router.get("/:id", read);
router.patch("/:id", update);
router.delete("/:id", destroy);
router.patch(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  like
);

module.exports = router;
