const express = require("express");
const { PolicyController } = require("../controllers");
const router = express.Router();

router.post("/", PolicyController.createPolicy);
router.get("/", PolicyController.listPolicy);
router.get("/:id", PolicyController.getPolicy);
router.patch("/:id", PolicyController.updatePolicy);
router.delete("/:id", PolicyController.deletePolicy);

module.exports = router;
