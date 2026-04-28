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

// Mongodb connection

const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const CLUSTERNAME = process.env.CLUSTERNAME;
const APPNAME = process.env.APPNAME;

const URI = `mongodb+srv://${DBUSER}:${DBPASSWORD}@${CLUSTERNAME}.pjm9jvj.mongodb.net/?appName=${APPNAME}`;

mongoose.connect(URI)
.then((result) => console.log("Connected to DB"))
.catch((err) => console.log(err))