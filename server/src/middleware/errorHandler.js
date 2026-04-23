const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: err.message
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: 'Invalid data format'
    });
  }

  res.status(500).json({
    success: false,
    error: 'Something went wrong. Please try again later.'
  });
};

module.exports = errorHandler;