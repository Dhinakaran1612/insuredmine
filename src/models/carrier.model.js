const mongoose = require("mongoose");

const carrierSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      default: "",
    },
    producer: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Carrier = mongoose.model("Carrier", carrierSchema);

module.exports = Carrier;
