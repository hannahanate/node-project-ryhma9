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

// get all appointments for the logged-in user
router.get("/me", auth, getMyAppointments);

module.exports = router;
