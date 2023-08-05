const express = require("express");
const router = express.Router();
const xlsx = require("xlsx");
const asyncHandler = require("express-async-handler");
const multer = require("multer");
const httpStatus = require("http-status");

// Routes
const accountRoutes = require("./account.routes");
const policyRoutes = require("./policy.routes");
const userRoutes = require("./user.routes");

const { dateFormat } = require("../utils/dateFormat");
const {
  Account,
  Agent,
  Carrier,
  LOB,
  Policy,
  User,
  UserAccount,
} = require("../models");
const uploadFile = multer().single("file");

const defaultRoutes = [
  {
    path: "/account",
    route: accountRoutes,
  },
  {
    path: "/policy",
    route: policyRoutes,
  },
  {
    path: "/user",
    route: userRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.post(
  "/upload-file",
  uploadFile,
  asyncHandler(async (req, res) => {
    if (!req?.file?.buffer) {
      return res.sendStatus(400);
    }

    const workbook = xlsx.read(req.file.buffer);

    const xlData = xlsx.utils.sheet_to_json(workbook.Sheets.Sheet1);

    const agentList = [];
    const accountList = [];
    const carrierList = [];
    const lobList = [];
    const policyList = [];
    const userList = [];
    const userAccountList = [];

    for (let i = 0; i < xlData.length; i++) {
      const {
        agent,
        account_name,
        premium_amount_written,
        premium_amount,
        company_name,
        producer,
        category_name,
        policy_mode,
        policy_number,
        policy_type,
        policy_start_date,
        policy_end_date,
        email,
        gender,
        firstname,
        city,
        phone,
        address,
        state,
        zip,
        dob,
        userType,
        csr,
      } = xlData[i];

      const dateOfBirth = dateFormat(dob, "dob");

      const startDate = dateFormat(policy_start_date, "startDate");

      const endDate = dateFormat(policy_end_date, "endDate");

      // Agent
      const isAgentExist = agentList.find((x) => x?.agent == agent);

      if (!isAgentExist) {
        agentList.push({ agent });
      }

      // Account
      accountList.push({
        account_name,
        premium_amount_written: premium_amount_written ?? "",
        premium_amount,
      });

      // Carrier
      carrierList.push({
        company_name,
        producer,
      });

      // Lob
      lobList.push({
        category_name,
      });

      // Policy
      policyList.push({
        policy_mode,
        policy_number,
        policy_type,
        policy_start_date: startDate,
        policy_end_date: endDate,
      });

      // User
      userList.push({
        email,
        userType,
        gender: gender ?? "",
        firstname,
        city,
        phone,
        address,
        state,
        zip,
        dob: dateOfBirth,
      });

      // User Account
      userAccountList.push({
        userType,
        csr,
      });
    }

    // Save details
    // await Account.insertMany(accountList);
    // await Agent.insertMany(agentList);
    // await Carrier.insertMany(carrierList);
    // await LOB.insertMany(lobList);
    // await Policy.insertMany(policyList);
    await User.insertMany(userList);
    await UserAccount.insertMany(userAccountList);

    return res.status(httpStatus.CREATED).json({
      success: true,
      message: "Created",
    });
  })
);

module.exports = router;
