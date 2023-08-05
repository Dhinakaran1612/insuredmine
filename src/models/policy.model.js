const mongoose = require("mongoose");

const policySchema = new mongoose.Schema(
  {
    policy_mode: {
      type: Number,
      default: 0,
    },
    policy_number: {
      type: String,
      default: "",
    },
    policy_type: {
      type: String,
      default: "",
    },
    policy_start_date: Date,
    policy_end_date: Date,
  },
  {
    timestamps: true,
  }
);

const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
