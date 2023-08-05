const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    agent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
