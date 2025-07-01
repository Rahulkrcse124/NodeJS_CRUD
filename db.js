const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/CRUD_OPERATION2";

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
