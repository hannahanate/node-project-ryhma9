const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ('dotenv').config();

const mongoSanitize = require("express-mongo-sanitize");

app.use(express.json());
app.use(express.static("public"));
// app.use(mongoSanitize());

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// import authentication routes, login & register endpoints
const authRoutes = require("./routes/authRoutes");
//use auth routes with base path /api/auth
app.use("/api/auth", authRoutes);

// use slots

app.use("/api/slots", require("./routes/slots"));

// use appointments
app.use("/api/appointments", require("./routes/appRoutes"));

// handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  res.status(500).json({ message: "Internal server error" });
});

// Mongodb connection

const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@node-project.7lsqvu9.mongodb.net/?appName=node-project`;


mongoose.connect(URI)
.then((result) => console.log("Connected to DB"))
.catch((err) => console.log(err))