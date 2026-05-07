const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
    createAppointment,
    getAppointments,
    getAppointment,
    cancelAppointment,
    getMyAppointments,
} = require("../controllers/appController");

// create new appointment
router.post("/", auth, createAppointment);

// get all appointments for the authorized user
router.get("/me", auth, getMyAppointments);

module.exports = router;
