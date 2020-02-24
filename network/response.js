exports.success = function(req, res, message, status) {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(status);
  res.send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
}

exports.error = function(req, res, message, status, details) {
  let statusCode = status || 500;
  let statusMessage = message || 'Internal Error';

  console.error(details);
  res.status(status);
  res.send({
    error: statusMessage,
    status: statusCode,
    body: false,
  });
}