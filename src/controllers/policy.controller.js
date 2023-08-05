const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const { ThrowException } = require("../utils/throwException");
const { Policy } = require("../models");

const createPolicy = asyncHandler(async (req, res) => {
  const create = await Policy.create(req.body);
  return res.status(httpStatus.CREATED).json({
    success: true,
    payload: create,
  });
});

const listPolicy = asyncHandler(async (req, res) => {
  const list = await Policy.find({});
  return res.status(httpStatus.OK).json({
    success: true,
    payload: list,
  });
});

const getPolicy = asyncHandler(async (req, res) => {
  const data = await Policy.findById(req.params.id);

  if (!data) {
    return ThrowException(httpStatus.NOT_FOUND, "Data not found", res);
  }

  return res.status(httpStatus.OK).json({
    success: true,
    payload: data,
  });
});

const updatePolicy = asyncHandler(async (req, res) => {
  const updated = await Policy.findByIdAndUpdate(req.params.id, req.body, {
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

const deletePolicy = asyncHandler(async (req, res) => {
  const deleted = await Policy.findByIdAndDelete(req.params.id);

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
  createPolicy,
  listPolicy,
  getPolicy,
  updatePolicy,
  deletePolicy,
};
