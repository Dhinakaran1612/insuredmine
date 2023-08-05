const express = require("express");
const { UserController } = require("../controllers");
const router = express.Router();

router.post("/", UserController.createUser);
router.get("/", UserController.listUser);
router.get("/:id", UserController.getUser);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
