const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const { ThrowException } = require("../utils/throwException");
const { Account } = require("../models");

const createAccount = asyncHandler(async (req, res) => {
  const create = await Account.create(req.body);
  return res.status(httpStatus.CREATED).json({
    success: true,
    payload: create,
  });
});

const listAccount = asyncHandler(async (req, res) => {
  const list = await Account.find({});
  return res.status(httpStatus.OK).json({
    success: true,
    payload: list,
  });
});

const getAccount = asyncHandler(async (req, res) => {
  const data = await Account.findById(req.params.id);

  if (!data) {
    return ThrowException(httpStatus.NOT_FOUND, "Data not found", res);
  }

  return res.status(httpStatus.OK).json({
    success: true,
    payload: data,
  });
});

const updateAccount = asyncHandler(async (req, res) => {
  const updated = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    upsert: false,
  });

  if (!updated) {
    return ThrowException(
      httpStatus.NOT_FOUND,
      "Data not found to update",
      res
    );
  }

  return res.status(httpStatus.CREATED).json({
    success: true,
    payload: updated,
  });
});

const deleteAccount = asyncHandler(async (req, res) => {
  const deleted = await Account.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return ThrowException(
      httpStatus.NOT_FOUND,
      "Data not found to delete",
      res
    );
  }

  return res.status(httpStatus.CREATED).json({
    success: true,
  });
});

module.exports = {
  createAccount,
  listAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};
