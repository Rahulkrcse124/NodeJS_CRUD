const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// import Routes
const personRoute = require("./Routes/personRoutes");
const menuRoute = require("./Routes/menuRoutes");

// use routes
app.use("/person", personRoute);
app.use("/menu", menuRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is runing on port:", PORT);
});
