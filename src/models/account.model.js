const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    account_name: {
      type: String,
      default: "",
    },
    premium_amount_written: {
      type: String,
      default: "",
    },
    premium_amount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
