export const successResponse = (
  res,
  statusCode = 200,
  message = "Success",
  data = null
) => {
  const response = {
    success: true,
    message,
  };

  if (data) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

export const errorResponse = (
  res,
  statusCode = 500,
  message = "Something went wrong"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export const paginatedResponse = (
  res,
  statusCode = 200,
  message,
  data,
  pagination
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    pagination,
  });
};