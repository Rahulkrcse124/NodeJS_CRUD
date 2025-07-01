const mongoose = require("mongoose");
require("dotenv").config();

// const mongoLocalUrl = process.env.MONGODB_LOCAL_URL ;
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb connected with server");
});

db.on("error", (err) => {
  console.log("mongodb connection error", err);
});

db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
