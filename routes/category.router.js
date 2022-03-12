const express = require('express');
const { validateCategoryName, auth } = require('../middlewares');
const CategoryController = require('../controllers/category.controller');

const router = express.Router();

router.post(
  '/',
  validateCategoryName, auth,
  CategoryController.create,
);

module.exports = router;