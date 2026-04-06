export const handleSuccess = (res, statusCode, message, data) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

export const handleError = (res, statusCode, message) => {
  res.status(statusCode).json({
    success: false,
    message
  });
};