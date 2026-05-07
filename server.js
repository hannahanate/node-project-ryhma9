const express = require("express");
const app = express();
const mongoose = require("mongoose");
require ('dotenv').config();

app.use(express.json());

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

// Mongodb connection

const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@node-project.7lsqvu9.mongodb.net/?appName=node-project`;


mongoose.connect(URI)
.then((result) => console.log("Connected to DB"))
.catch((err) => console.log(err))