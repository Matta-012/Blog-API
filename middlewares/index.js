const validateUser = require('./validateUser.middleware');
const validateRegistration = require('./validateRegistration.middleware');
const validateLogin = require('./validateLogin.middleware');
const validateCategoryName = require('./validateCategoryName.middleware');
const validateNewPost = require('./validateNewPost.middleware');
const validateCategoryId = require('./validateCategoryId.middleware');
const auth = require('./auth.middleware');
const errorHandler = require('./errorHandler.middleware');

module.exports = {
  validateUser,
  validateRegistration,
  validateLogin,
  errorHandler,
  auth,
  validateCategoryName,
  validateCategoryId,
  validateNewPost,
};
