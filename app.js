const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// import Routes
const personRoute = require("./Routes/personRoutes");
const menuRoute = require("./Routes/menuRoutes");

// use routes
app.use("/person", personRoute);
app.use("/menu", menuRoute);

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
