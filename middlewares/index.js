const validateUser = require('./validateUser.middleware');
const validateRegistration = require('./validateRegistration.middleware');
const validateLogin = require('./validateLogin.middleware');
const errorHandler = require('./errorHandler.middleware');

module.exports = {
  validateUser,
  validateRegistration,
  validateLogin,
  errorHandler,
};
