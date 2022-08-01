const express = require("express");
const router = express.Router();

const {
  CreateUserAndTutor,
  CreateParentAndStudent,
  CheckUser,
  getUserByEmail,
} = require("../controllers/users");

// Connect Users Routes with Users functions

router.route("/:email").get(getUserByEmail);
router.route("/createTutor").post(CreateUserAndTutor);
router.route("/createParent").post(CreateParentAndStudent);
router.route("/check/:id").get(CheckUser);
module.exports = router;
