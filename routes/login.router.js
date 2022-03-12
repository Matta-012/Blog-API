const express = require('express');
const { validateLogin, validateUser } = require('../middlewares');
const LoginController = require('../controllers/login.controller');

const router = express.Router();

router.post(
  '/',
  validateUser, validateLogin,
  LoginController.create,
);

module.exports = router;
