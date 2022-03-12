const express = require('express');
const { validateNewPost, validateCategoryId, auth } = require('../middlewares');
const PostController = require('../controllers/post.controller');

const router = express.Router();

router.post(
  '/',
  validateNewPost, validateCategoryId, auth,
  PostController.create,
);

// router.get(
//   '/',
//   auth,
//   CategoryController.getAll,
// );

module.exports = router;