const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const { ThrowException } = require("../utils/throwException");
const { User } = require("../models");

const createUser = asyncHandler(async (req, res) => {
  const create = await User.create(req.body);
  return res.status(httpStatus.CREATED).json({
    success: true,
    payload: create,
  });
});

const listUser = asyncHandler(async (req, res) => {
  const list = await User.find({});
  return res.status(httpStatus.OK).json({
    success: true,
    payload: list,
  });
});

const getUser = asyncHandler(async (req, res) => {
  const data = await User.findById(req.params.id);

  if (!data) {
    return ThrowException(httpStatus.NOT_FOUND, "Data not found", res);
  }

  return res.status(httpStatus.OK).json({
    success: true,
    payload: data,
  });
});

const updateUser = asyncHandler(async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
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

const deleteUser = asyncHandler(async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);

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
  createUser,
  listUser,
  getUser,
  updateUser,
  deleteUser,
};
