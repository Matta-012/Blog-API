const validateUser = require('./validateUser.middleware');
const validateRegistration = require('./validateRegistration.middleware');
const errorHandler = require('./errorHandler.middleware');

module.exports = {
  validateUser,
  validateRegistration,
  errorHandler,
};