var express = require("express");
var router = express.Router();
let passport = require("../config/passport");

const {
  all,
  signUp,
  verifyMail,
  signIn,
  verifyToken,
  read,
  signOut,
} = require("../controllers/userController");

/* GET users listing. */

router.get("/", all);
router.get("/:id", read);
router.get("/verify/:code", verifyMail);
router.get(
  "/token",
  passport.authenticate("jwt", { session: false }),
  verifyToken
);
router.post("/auth/signup", signUp);
router.post("/signin", signIn);
router.patch("/auth/signout/:id", signOut);

module.exports = router;
