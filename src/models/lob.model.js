const mongoose = require("mongoose");

const lobSchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Lob = mongoose.model("Lob", lobSchema);

module.exports = Lob;
