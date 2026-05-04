const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const { createSlot, updateSlot } = require("../controllers/slotController");

router.post("/", auth, authorize("admin"), createSlot);
router.put("/:id", auth, authorize("admin"), updateSlot);

module.exports = router;

