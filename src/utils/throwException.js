exports.ThrowException = (statusCode, message, res) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
