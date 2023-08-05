const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    firstname: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
