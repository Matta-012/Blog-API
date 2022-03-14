const express = require('express');
const { validateUser, validateRegistration, auth } = require('../middlewares');
const UserController = require('../controllers/user.controllers');

const router = express.Router();

router.post(
  '/',
  validateUser, validateRegistration,
  UserController.create,
);

router.get(
  '/',
  auth,
  UserController.getAll,
);

router.get(
  '/:id',
  auth,
  UserController.getById,
);

router.delete(
  '/me',
  auth,
  UserController.deleteUser,
);

module.exports = router;