const express = require("express");
const router = express.Router();
const menuModel = require("../models/menu");

// menu post data
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menuModel(data);
    const response = await newMenu.save();

    console.log(" saved menu data");
    res.status(200).json(response);
  } catch (error) {
    console.log(error, "internal server error");
    res.status(500).json(error);
  }
});

// get menu item
router.get("/", async (req, res) => {
  try {
    const data = await menuModel.find();
    console.log("menu item fetch sucessfully");
    res.status(200).json(data);
  } catch (error) {
    console.log("internal server error", error);
    res.status(500).json(error);
  }
});

module.exports = router;
