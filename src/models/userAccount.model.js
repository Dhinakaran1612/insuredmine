const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      default: "",
    },
    csr: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const UserAccount = mongoose.model("UserAccount", userAccountSchema);

module.exports = UserAccount;
