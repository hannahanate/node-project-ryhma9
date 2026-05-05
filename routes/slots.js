const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const { createSlot, updateSlot, deleteSlot, getSlot, getSlots } = require("../controllers/slotController");

// create a new timeslot
router.post("/", auth, authorize("admin"), createSlot);

// update timeslot with ID
router.put("/:id", auth, authorize("admin"), updateSlot);

// delete timeslot with ID
router.delete("/:id", auth, authorize("admin"), deleteSlot);

// get one created timeslot with ID
router.get("/:id", auth, authorize("admin"), getSlot);

// get all the timeslots
router.get("/", auth, authorize("admin"), getSlots);

module.exports = router;

