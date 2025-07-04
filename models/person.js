const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: String,
  },

  work: {
    type: String,
    enum: ["Student", "teacher", "principal"],
    required: true,
  },

  mobile: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
  },

  salary: {
    type: Number,
    required: true,
  },
});

const personModel = mongoose.model("person", personSchema);
module.exports = personModel;
