const express = require('express');
const { validateUser, validateRegistration } = require('../middlewares');
const UserController = require('../controllers/user.controllers');

const router = express.Router();

router.post(
  '/',
  validateUser, validateRegistration,
  UserController.create,
);

module.exports = router;