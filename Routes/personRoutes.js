const express = require("express");
const router = express.Router();
const personModel = require("../models/person");

// person post data
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new personModel(data);
    const response = await newPerson.save();

    console.log("saved person data");
    res.status(200).json(response);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json(error);
  }
});

// person get data
router.get("/", async (req, res) => {
  try {
    const response = await personModel.find();
    console.log("data fetch sucessfull");

    res.status(200).json(response);
  } catch (error) {
    console.log("internal server error!", error);
    res.status(500).json(error);
  }
});

// url parameter
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType == "Student" ||
      workType == "teacher" ||
      workType == "principal"
    ) {
      const response = await personModel.find({ work: workType });
      console.log("data fetch sucessfully");
      res.status(200).json(response);
    } else {
      res.status(404).send("invalid work type");
      console.log("Invalid work type");
    }
  } catch (error) {
    console.log("internal server error: ", error);
    res.status(500).json(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPerson = req.body;

    const response = await personModel.findByIdAndUpdate(
      personId,
      updatedPerson,
      {
        new: true, // return the updated document
        runValidators: true, // run validator mongodb
      }
    );
    console.log("data updated sucessfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("internal server error:", error);
    res.status(500).json(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await personModel.findByIdAndDelete(personId);

    if (!response) {
      res.status(404).json("person not found");
    }

    console.log("person deleted sucessfullly");
    res.json({ message: "person deleted sucessfully" });
    
  } catch (error) {
    console.log("internal server error", error);
    res.status(500).json(error);
  }
});

module.exports = router;
