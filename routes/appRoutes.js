const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
    createAppointment,
    getAppointments,
    getAppointment,
    cancelAppointment
} = require("../controllers/appController");
