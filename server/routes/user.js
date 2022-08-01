const express = require("express");
// controllers
const user = require("../controllers/users.js");

const router = express.Router();

// Connect User Routes with Users functions

router
  .get("/", user.onGetAllUsers)
  .post("/", user.onCreateUser)
  .get("/:id", user.onGetUserById)
  .delete("/:id", user.onDeleteUserById);

module.exports = router;
