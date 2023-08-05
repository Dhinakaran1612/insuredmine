const express = require("express");
const { AccountController } = require("../controllers");
const router = express.Router();

router.post("/", AccountController.createAccount);
router.get("/", AccountController.listAccount);
router.get("/:id", AccountController.getAccount);
router.patch("/:id", AccountController.updateAccount);
router.delete("/:id", AccountController.deleteAccount);

module.exports = router;
