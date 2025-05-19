const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");

router.get("/", songController.index);
router.get("/:id", songController.show);
router.post("/", songController.store);
router.put("/:id", songController.update);
router.patch("/:id", songController.modify);
router.delete("/:id", songController.destroy);

module.exports = router;
