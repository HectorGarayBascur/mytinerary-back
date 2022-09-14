var express = require("express");
var router = express.Router();

const {
  all,
  signUp,
  verifyMail,
  signIn,
  read,
  signOut,
} = require("../controllers/userController");

/* GET users listing. */

router.get("/", all);
router.get("/:id", read);
router.get("/verify/:code", verifyMail);
router.post("/auth/signup", signUp);
router.post("/signin", signIn);
router.patch("/auth/signout/:id", signOut);

module.exports = router;
